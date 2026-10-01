import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanRequestForm from './pages/LoanRequestForm';
import LoanStatus from './pages/LoanStatus';
import { useLoanContext } from './context/LoanContext';
import NotificationSystem from './components/NotificationSystem';

const App = () => {
  const { state } = useLoanContext();

  return (
    <Router>
      <div className="app-container">
        <NotificationSystem />
        <Routes>
          <Route path="/" element={<LoanRequestForm />} />
          <Route path="/status" element={<LoanStatus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;