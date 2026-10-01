import axios, { AxiosInstance, AxiosError } from 'axios';
import {
  LoanRequest,
  LoanRequestInput,
  LoanStatusResponse,
  Notification,
  NotificationPayload,
  ApiResponse,
  ApiError,
  PaginatedResponse,
  LoanStats,
  LoanStatus
} from '../types/loan';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const mockLoans: LoanRequest[] = [
  {
    id: 'LOAN-001',
    clientName: 'Juan Pérez',
    clientEmail: 'juan.perez@email.com',
    clientType: 'existing',
    amount: 15000,
    term: 24,
    purpose: 'home_improvement',
    income: 3500,
    status: 'approved',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-17T14:20:00Z'
  },
  {
    id: 'LOAN-002',
    clientName: 'María García',
    clientEmail: 'maria.garcia@email.com',
    clientType: 'new',
    amount: 8000,
    term: 12,
    purpose: 'debt_consolidation',
    income: 2800,
    status: 'pending',
    createdAt: '2024-02-01T09:15:00Z',
    updatedAt: '2024-02-01T09:15:00Z'
  },
  {
    id: 'LOAN-003',
    clientName: 'Carlos López',
    clientEmail: 'carlos.lopez@email.com',
    clientType: 'existing',
    amount: 25000,
    term: 36,
    purpose: 'business',
    income: 5200,
    status: 'rejected',
    createdAt: '2024-01-20T11:45:00Z',
    updatedAt: '2024-01-25T16:30:00Z',
    rejectionReason: 'Insufficient income to cover the requested loan amount'
  }
];

const mockNotifications: Notification[] = [
  {
    id: 'NOTIF-001',
    type: 'success',
    title: 'Solicitud Aprobada',
    message: 'Tu solicitud de préstamo por $15,000 ha sido aprobada.',
    timestamp: '2024-01-17T14:20:00Z',
    read: true,
    requestId: 'LOAN-001'
  },
  {
    id: 'NOTIF-002',
    type: 'warning',
    title: 'Revisión en Progreso',
    message: 'Tu solicitud está siendo revisada por nuestro equipo.',
    timestamp: '2024-02-01T09:15:00Z',
    read: false,
    requestId: 'LOAN-002'
  },
  {
    id: 'NOTIF-003',
    type: 'error',
    title: 'Solicitud Rechazada',
    message: 'Tu solicitud de préstamo no pudo ser aprobada en esta ocasión.',
    timestamp: '2024-01-25T16:30:00Z',
    read: true,
    requestId: 'LOAN-003'
  }
];

class ApiService {
  private client: AxiosInstance;
  private useMock: boolean;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.useMock = import.meta.env.VITE_USE_MOCK !== 'false';

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const apiError = this.transformError(error);
        return Promise.reject(apiError);
      }
    );
  }

  private transformError(error: AxiosError): ApiError {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          return {
            code: 'BAD_REQUEST',
            message: 'La solicitud contiene datos inválidos. Por favor, verifica los campos e intenta nuevamente.'
          };
        case 401:
          return {
            code: 'UNAUTHORIZED',
            message: 'No tienes autorización para realizar esta acción.'
          };
        case 404:
          return {
            code: 'NOT_FOUND',
            message: 'El recurso solicitado no fue encontrado.'
          };
        case 500:
          return {
            code: 'SERVER_ERROR',
            message: 'Ha ocurrido un error en el servidor. Por favor, intenta más tarde.'
          };
        default:
          return {
            code: 'UNKNOWN_ERROR',
            message: 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.'
          };
      }
    } else if (error.request) {
      return {
        code: 'NETWORK_ERROR',
        message: 'No se pudo conectar con el servidor. Verifica tu conexión a internet.'
      };
    } else {
      return {
        code: 'CLIENT_ERROR',
        message: 'Error al procesar la solicitud. Por favor, intenta nuevamente.'
      };
    }
  }

  async createLoanRequest(input: LoanRequestInput): Promise<ApiResponse<LoanRequest>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const isApproved = input.income >= input.amount * 0.3;
      const newLoan: LoanRequest = {
        id: `LOAN-${String(mockLoans.length + 1).padStart(3, '0')}`,
        ...input,
        status: isApproved ? 'approved' : 'rejected',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        rejectionReason: isApproved ? undefined : 'Income does not meet minimum requirements'
      };
      
      mockLoans.push(newLoan);
      
      return {
        success: true,
        data: newLoan
      };
    }

    try {
      const response = await this.client.post<LoanRequest>('/loans', input);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async getLoanStatus(requestId: string): Promise<ApiResponse<LoanStatusResponse>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const loan = mockLoans.find(l => l.id === requestId);
      
      if (!loan) {
        return {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: `No se encontró la solicitud con ID: ${requestId}`
          }
        };
      }

      const statusHistory = this.generateStatusHistory(loan);
      
      return {
        success: true,
        data: {
          requestId: loan.id,
          status: loan.status,
          lastUpdated: loan.updatedAt,
          statusHistory,
          nextSteps: this.getNextSteps(loan.status)
        }
      };
    }

    try {
      const response = await this.client.get<LoanStatusResponse>(`/loans/${requestId}/status`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async getAllLoans(): Promise<ApiResponse<LoanRequest[]>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      return {
        success: true,
        data: mockLoans
      };
    }

    try {
      const response = await this.client.get<LoanRequest[]>('/loans');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async getNotifications(): Promise<ApiResponse<Notification[]>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      return {
        success: true,
        data: mockNotifications
      };
    }

    try {
      const response = await this.client.get<Notification[]>('/notifications');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async createNotification(payload: NotificationPayload): Promise<ApiResponse<Notification>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const newNotification: Notification = {
        id: `NOTIF-${String(mockNotifications.length + 1).padStart(3, '0')}`,
        ...payload,
        timestamp: new Date().toISOString(),
        read: false
      };
      
      mockNotifications.push(newNotification);
      
      return {
        success: true,
        data: newNotification
      };
    }

    try {
      const response = await this.client.post<Notification>('/notifications', payload);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async markNotificationAsRead(notificationId: string): Promise<ApiResponse<boolean>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const notification = mockNotifications.find(n => n.id === notificationId);
      if (notification) {
        notification.read = true;
      }
      
      return {
        success: true,
        data: true
      };
    }

    try {
      await this.client.patch(`/notifications/${notificationId}/read`);
      return {
        success: true,
        data: true
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async getLoanStats(): Promise<ApiResponse<LoanStats>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const totalRequests = mockLoans.length;
      const approvedCount = mockLoans.filter(l => l.status === 'approved').length;
      const rejectedCount = mockLoans.filter(l => l.status === 'rejected').length;
      const pendingCount = mockLoans.filter(l => l.status === 'pending').length;
      
      const totalAmount = mockLoans.reduce((sum, l) => sum + l.amount, 0);
      const totalTerm = mockLoans.reduce((sum, l) => sum + l.term, 0);
      
      return {
        success: true,
        data: {
          totalRequests,
          approvedCount,
          rejectedCount,
          pendingCount,
          averageAmount: totalRequests > 0 ? totalAmount / totalRequests : 0,
          averageTerm: totalRequests > 0 ? totalTerm / totalRequests : 0
        }
      };
    }

    try {
      const response = await this.client.get<LoanStats>('/loans/stats');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  private generateStatusHistory(loan: LoanRequest): Array<{ status: LoanStatus; timestamp: string; description: string }> {
    const history = [
      {
        status: 'pending' as LoanStatus,
        timestamp: loan.createdAt,
        description: 'Solicitud recibida y en espera de revisión'
      }
    ];

    if (loan.status === 'in_review' || loan.status === 'approved' || loan.status === 'rejected') {
      history.push({
        status: 'in_review' as LoanStatus,
        timestamp: new Date(new Date(loan.createdAt).getTime() + 86400000).toISOString(),
        description: 'Solicitud en revisión por el equipo de riesgos'
      });
    }

    if (loan.status === 'approved') {
      history.push({
        status: 'approved' as LoanStatus,
        timestamp: loan.updatedAt,
        description: 'Solicitud aprobada'
      });
    } else if (loan.status === 'rejected') {
      history.push({
        status: 'rejected' as LoanStatus,
        timestamp: loan.updatedAt,
        description: loan.rejectionReason || 'Solicitud rechazada'
      });
    }

    return history;
  }

  private getNextSteps(status: LoanStatus): string | undefined {
    switch (status) {
      case 'pending':
        return ' nuestro equipo revisará tu solicitud en un plazo de 24-48 horas hábiles.';
      case 'approved':
        return ' recibirás los fondos en tu cuenta en un plazo de 2-3 días hábiles.';
      case 'rejected':
        return ' puedes presentar una nueva solicitud después de 30 días o contactar soporte para más información.';
      case 'in_review':
        return ' por favor ten paciencia mientras nuestro equipo completa la revisión.';
      default:
        return undefined;
    }
  }

  private async simulateNetworkDelay(): Promise<void> {
    const delay = Math.random() * 500 + 200;
    return new Promise(resolve => setTimeout(resolve, delay));
  }
}

export const apiService = new ApiService();
export default apiService;