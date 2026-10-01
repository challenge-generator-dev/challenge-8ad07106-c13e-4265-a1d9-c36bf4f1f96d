import React, { useEffect, useState } from 'react';
import { useLoanRequests } from '../hooks/useLoanRequests';
import { LoanRequest, LoanStatus } from '../types/loan';
import { useContext } from 'react';
import { LoanContext } from '../context/LoanContext';

const statusLabels: Record<LoanStatus, string> = {
  pending: 'Pendiente',
  approved: 'Aprobado',
  rejected: 'Rechazado',
  review: 'En revisión',
};

const statusColors: Record<LoanStatus, string> = {
  pending: '#f59e0b',
  approved: '#10b981',
  rejected: '#ef4444',
  review: '#3b82f6',
};

const purposeLabels: Record<string, string> = {
  personal: 'Personal',
  vivienda: 'Vivienda',
  negocio: 'Negocio',
  educacion: 'Educación',
  vehiculo: 'Vehículo',
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const LoanStatus: React.FC = () => {
  const { requests, isLoading, error, fetchRequests } = useLoanRequests();
  const { addNotification } = useContext(LoanContext);
  const [filteredStatus, setFilteredStatus] = useState<LoanStatus | ''>('');

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  useEffect(() => {
    if (error) {
      addNotification({
        id: Date.now().toString(),
        type: 'error',
        message: error,
        timestamp: new Date().toISOString(),
      });
    }
  }, [error, addNotification]);

  const filteredRequests = filteredStatus
    ? requests.filter((req) => req.status === filteredStatus)
    : requests;

  const handleRetry = () => {
    fetchRequests();
  };

  if (isLoading && requests.length === 0) {
    return (
      <div className="loan-status-container">
        <h2>Estado de Mis Solicitudes</h2>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando sus solicitudes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="loan-status-container">
      <h2>Estado de Mis Solicitudes</h2>
      <p className="page-description">
        Aquí puede visualizar el estado de todas sus solicitudes de préstamo.
      </p>

      {error && (
        <div className="error-banner" role="alert">
          <div className="error-content">
            <span>{error}</span>
            <button onClick={handleRetry} className="btn-retry">
              Reintentar
            </button>
          </div>
        </div>
      )}

      <div className="filters">
        <label htmlFor="status-filter">Filtrar por estado:</label>
        <select
          id="status-filter"
          value={filteredStatus}
          onChange={(e) => setFilteredStatus(e.target.value as LoanStatus | '')}
          className="filter-select"
        >
          <option value="">Todos los estados</option>
          <option value="pending">Pendiente</option>
          <option value="review">En revisión</option>
          <option value="approved">Aprobado</option>
          <option value="rejected">Rechazado</option>
        </select>
      </div>

      {filteredRequests.length === 0 ? (
        <div className="empty-state">
          <p>No hay solicitudes que mostrar.</p>
          <p className="empty-hint">
            Si acaba de realizar una solicitud, puede que aún esté procesándose.
          </p>
        </div>
      ) : (
        <div className="requests-list">
          {filteredRequests.map((request: LoanRequest) => (
            <div key={request.id} className="request-card">
              <div className="request-header">
                <span className="request-id">#{request.id.slice(-8)}</span>
                <span
                  className="request-status"
                  style={{ backgroundColor: statusColors[request.status] }}
                >
                  {statusLabels[request.status]}
                </span>
              </div>

              <div className="request-details">
                <div className="detail-row">
                  <span className="detail-label">Cliente:</span>
                  <span className="detail-value">{request.clientName}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Correo:</span>
                  <span className="detail-value">{request.clientEmail}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Monto:</span>
                  <span className="detail-value">{formatCurrency(request.amount)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Plazo:</span>
                  <span className="detail-value">{request.term} meses</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Propósito:</span>
                  <span className="detail-value">{purposeLabels[request.purpose] || request.purpose}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Fecha de solicitud:</span>
                  <span className="detail-value">{formatDate(request.createdAt)}</span>
                </div>
              </div>

              {request.status === 'approved' && (
                <div className="success-message">
                  <span>✓ Su préstamo ha sido aprobado. Nos contactaremos pronto.</span>
                </div>
              )}

              {request.status === 'rejected' && (
                <div className="rejection-message">
                  <span>✗ Su solicitud fue rechazada. Puede intentar nuevamente.</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {requests.length > 0 && (
        <div className="requests-summary">
          <p>
            Total de solicitudes: <strong>{requests.length}</strong>
            {filteredStatus && (
              <span> ({filteredRequests.length} mostrados)</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoanStatus;