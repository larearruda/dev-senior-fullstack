import "./App.css";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Chat from "./pages/chat/Chat";
import { useEffect, useState } from "react";
import SideMenu from "./components/side-menu/SideMenu";
import Dashboard from "./pages/dashboard/Dashboard";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { StateIterface } from "./store/store";
import Bookings from "./pages/bookings/Bookings";
import Customers from "./pages/customers/Customers";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userAuth = useSelector((state: StateIterface) => state.auth.user);

  useEffect(() => {
    JSON.stringify(userAuth) === "{}"
      ? setIsAuthenticated(false)
      : setIsAuthenticated(true);
    console.log("userAuth", userAuth);
    console.log("isAuthenticated", isAuthenticated);
  }, [userAuth, isAuthenticated]);

  return (
    <Router>
      {isAuthenticated ? (
        <Box sx={{ display: "flex" }}>
          <SideMenu />
          <Box
            component="main"
            sx={() => ({
              flexGrow: 1,
              // backgroundColor: "red",
              overflow: "auto",
              marginLeft: "20px",
              marginBottom: "20px",
            })}
          >
            {/* <NavBar /> */}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/bookings" element={<Bookings />} />
            </Routes>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Routes>
            <Route
              path="/login"
              element={<Login onLogin={() => setIsAuthenticated(true)} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Box>
      )}
    </Router>
  );
}

export default App;
