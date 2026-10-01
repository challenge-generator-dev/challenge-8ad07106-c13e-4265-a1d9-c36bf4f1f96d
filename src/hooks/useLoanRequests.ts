import { useCallback, useEffect } from 'react';
import { useLoanContext } from '../context/LoanContext';
import { LoanRequest, LoanStatus } from '../types/loan';
import { submitLoanRequest, fetchLoanRequests, updateLoanStatus } from '../services/api';

interface UseLoanRequestsReturn {
  requests: LoanRequest[];
  loading: boolean;
  error: string | null;
  createRequest: (data: Omit<LoanRequest, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  loadRequests: () => Promise<void>;
  approveRequest: (id: string) => Promise<void>;
  rejectRequest: (id: string) => Promise<void>;
  getRequestById: (id: string) => LoanRequest | undefined;
  getRequestsByStatus: (status: LoanStatus) => LoanRequest[];
}

export function useLoanRequests(): UseLoanRequestsReturn {
  const { state, dispatch, addNotification, updateRequestStatus } = useLoanContext();
  const { requests, loading, error } = state;

  const createRequest = useCallback(
    async (data: Omit<LoanRequest, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });

      try {
        const newRequest = await submitLoanRequest(data);
        dispatch({ type: 'ADD_REQUEST', payload: newRequest });
        addNotification('Solicitud de préstamo creada exitosamente', 'success');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al crear la solicitud';
        dispatch({ type: 'SET_ERROR', payload: errorMessage });
        addNotification(errorMessage, 'error');
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    [dispatch, addNotification]
  );

  const loadRequests = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const data = await fetchLoanRequests();
      dispatch({ type: 'SET_REQUESTS', payload: data });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar las solicitudes';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      addNotification(errorMessage, 'error');
    }
  }, [dispatch, addNotification]);

  const approveRequest = useCallback(
    async (id: string) => {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        await updateLoanStatus(id, 'approved');
        updateRequestStatus(id, 'approved');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al aprobar la solicitud';
        dispatch({ type: 'SET_ERROR', payload: errorMessage });
        addNotification(errorMessage, 'error');
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    [dispatch, updateRequestStatus, addNotification]
  );

  const rejectRequest = useCallback(
    async (id: string) => {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        await updateLoanStatus(id, 'rejected');
        updateRequestStatus(id, 'rejected');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al rechazar la solicitud';
        dispatch({ type: 'SET_ERROR', payload: errorMessage });
        addNotification(errorMessage, 'error');
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    [dispatch, updateRequestStatus, addNotification]
  );

  const getRequestById = useCallback(
    (id: string): LoanRequest | undefined => {
      return requests.find((request) => request.id === id);
    },
    [requests]
  );

  const getRequestsByStatusFilter = useCallback(
    (status: LoanStatus): LoanRequest[] => {
      return requests.filter((request) => request.status === status);
    },
    [requests]
  );

  useEffect(() => {
    if (requests.length === 0) {
      loadRequests();
    }
  }, [loadRequests, requests.length]);

  return {
    requests,
    loading,
    error,
    createRequest,
    loadRequests,
    approveRequest,
    rejectRequest,
    getRequestById,
    getRequestsByStatus: getRequestsByStatusFilter,
  };
}