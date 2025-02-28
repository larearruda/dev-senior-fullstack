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
import { Box } from "@mui/material";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      {isAuthenticated ? (
        <Box sx={{ display: "flex" }}>
          <SideMenu />
          {/* <Navbar /> - ainda nao criei esse componente */}
          <Box
            component="main"
            sx={() => ({
              flexGrow: 1,
              backgroundColor: "red",
              overflow: "auto",
            })}
          >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </Box>
        </Box>
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
