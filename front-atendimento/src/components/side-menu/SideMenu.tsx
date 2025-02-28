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
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { useNavigate } from "react-router-dom";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";

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
  const mainListItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Clientes", icon: <PeopleIcon />, path: "/clients" },
    { text: "Reservas", icon: <AirplaneTicketIcon />, path: "/bookings" },
  ];

  const handleClick = (path: any) => {
    console.log("clicou no item", path);
    navigate("/dashboard");
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
            {mainListItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  selected={index === 0}
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
