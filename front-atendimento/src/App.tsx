import "./App.css";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Chat from "./pages/chat/Chat";
import { useState } from "react";
import SideMenu from "./components/side-menu/SideMenu";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex h-screen">
          <SideMenu />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
