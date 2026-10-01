import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { LoanRequest, LoanStatus, Notification } from '../types/loan';

interface LoanState {
  requests: LoanRequest[];
  notifications: Notification[];
  loading: boolean;
  error: string | null;
}

type LoanAction =
  | { type: 'SET_REQUESTS'; payload: LoanRequest[] }
  | { type: 'ADD_REQUEST'; payload: LoanRequest }
  | { type: 'UPDATE_REQUEST'; payload: LoanRequest }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_NOTIFICATIONS' };

const initialState: LoanState = {
  requests: [],
  notifications: [],
  loading: false,
  error: null,
};

function loanReducer(state: LoanState, action: LoanAction): LoanState {
  switch (action.type) {
    case 'SET_REQUESTS':
      return { ...state, requests: action.payload, loading: false };
    case 'ADD_REQUEST':
      return { ...state, requests: [...state.requests, action.payload] };
    case 'UPDATE_REQUEST':
      return {
        ...state,
        requests: state.requests.map((req) =>
          req.id === action.payload.id ? action.payload : req
        ),
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.payload),
      };
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: [] };
    default:
      return state;
  }
}

interface LoanContextType {
  state: LoanState;
  dispatch: React.Dispatch<LoanAction>;
  addNotification: (message: string, type: 'success' | 'error' | 'info') => void;
  removeNotification: (id: string) => void;
  addRequest: (request: LoanRequest) => void;
  updateRequestStatus: (id: string, status: LoanStatus) => void;
  getRequestsByStatus: (status: LoanStatus) => LoanRequest[];
}

const LoanContext = createContext<LoanContextType | undefined>(undefined);

export function LoanProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(loanReducer, initialState);

  const addNotification = (message: string, type: 'success' | 'error' | 'info') => {
    const notification: Notification = {
      id: crypto.randomUUID(),
      message,
      type,
      timestamp: new Date().toISOString(),
    };
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
    }, 5000);
  };

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const addRequest = (request: LoanRequest) => {
    dispatch({ type: 'ADD_REQUEST', payload: request });
  };

  const updateRequestStatus = (id: string, status: LoanStatus) => {
    const request = state.requests.find((r) => r.id === id);
    if (request) {
      const updatedRequest = { ...request, status, updatedAt: new Date().toISOString() };
      dispatch({ type: 'UPDATE_REQUEST', payload: updatedRequest });

      if (status === 'approved') {
        addNotification('Tu solicitud de préstamo ha sido aprobada', 'success');
      } else if (status === 'rejected') {
        addNotification('Tu solicitud de préstamo ha sido rechazada', 'error');
      }
    }
  };

  const getRequestsByStatus = (status: LoanStatus): LoanRequest[] => {
    return state.requests.filter((request) => request.status === status);
  };

  return (
    <LoanContext.Provider
      value={{
        state,
        dispatch,
        addNotification,
        removeNotification,
        addRequest,
        updateRequestStatus,
        getRequestsByStatus,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
}

export function useLoanContext() {
  const context = useContext(LoanContext);
  if (!context) {
    throw new Error('useLoanContext debe usarse dentro de un LoanProvider');
  }
  return context;
}