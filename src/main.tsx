import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { LoanProvider } from './context/LoanContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoanProvider>
      <App />
    </LoanProvider>
  </React.StrictMode>
);