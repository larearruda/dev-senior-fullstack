import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketsDashboard from './pages/tickets-dashboard/TicketsDashboard';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container component="main"
        sx={{
          minWidth: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fbfeff',
        }}>
        <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tickets" element={<TicketsDashboard />} />
        </Routes>
      </Router>

      </Container>
    </div>
  );
}

export default App;
