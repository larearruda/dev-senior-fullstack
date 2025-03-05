import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/auth";

const drawerWidth = 240;

const CustomDrawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const mainListItems = [
    { id: 1, text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    {
      id: 2,
      text: "Reservas",
      icon: <AirplaneTicketIcon />,
      path: "/bookings",
    },
    { id: 3, text: "Clientes", icon: <PeopleIcon />, path: "/customers" },
    { id: 4, text: "Logout", icon: <LogoutIcon />, path: "/login" },
  ];

  const handleClick = (path: any) => {
    console.log("clicou no item", path);
    if (path === "/login") {
      dispatch(logoutAction());
    }
    navigate(path);
  };
  return (
    <CustomDrawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
          <List dense>
            {mainListItems.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => handleClick(item.path)}
                >
                  <ListItemText primary={item.text} />
                  <ListItemIcon>{item.icon}</ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </CustomDrawer>
  );
};

export default SideMenu;
