import React from 'react';
import { useLoanContext } from '../context/LoanContext';
import './NotificationSystem.css';

interface NotificationItemProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: (id: string) => void;
}

function NotificationItem({ id, message, type, onClose }: NotificationItemProps) {
  const getIconForType = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'info':
        return 'ℹ';
      default:
        return '•';
    }
  };

  return (
    <div className={`notification-item notification-${type}`}>
      <span className="notification-icon">{getIconForType()}</span>
      <span className="notification-message">{message}</span>
      <button
        className="notification-close"
        onClick={() => onClose(id)}
        aria-label="Cerrar notificación"
      >
        ×
      </button>
    </div>
  );
}

export default function NotificationSystem() {
  const { state, removeNotification } = useLoanContext();
  const { notifications } = state;

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={removeNotification}
        />
      ))}
    </div>
  );
}