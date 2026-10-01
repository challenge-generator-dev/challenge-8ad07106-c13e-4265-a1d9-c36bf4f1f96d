export type LoanStatus = 'pending' | 'approved' | 'rejected' | 'in_review';

export type ClientType = 'new' | 'existing';

export interface LoanRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientType: ClientType;
  amount: number;
  term: number;
  purpose: string;
  income: number;
  status: LoanStatus;
  createdAt: string;
  updatedAt: string;
  rejectionReason?: string;
}

export interface LoanRequestInput {
  clientName: string;
  clientEmail: string;
  clientType: ClientType;
  amount: number;
  term: number;
  purpose: string;
  income: number;
}

export interface LoanStatusResponse {
  requestId: string;
  status: LoanStatus;
  lastUpdated: string;
  statusHistory: StatusHistoryEntry[];
  nextSteps?: string;
}

export interface StatusHistoryEntry {
  status: LoanStatus;
  timestamp: string;
  description: string;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  requestId?: string;
}

export interface NotificationPayload {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  requestId?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string>;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface LoanFormData {
  clientName: string;
  clientEmail: string;
  clientType: ClientType;
  amount: string | number;
  term: string | number;
  purpose: string;
  income: string | number;
}

export interface LoanFilters {
  status?: LoanStatus;
  clientType?: ClientType;
  minAmount?: number;
  maxAmount?: number;
  startDate?: string;
  endDate?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface LoanStats {
  totalRequests: number;
  approvedCount: number;
  rejectedCount: number;
  pendingCount: number;
  averageAmount: number;
  averageTerm: number;
}