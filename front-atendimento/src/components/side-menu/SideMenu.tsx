import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const SideMenu: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6">Menu</Typography>
      </Toolbar>
      <List>
        <ListItem component="button">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component="button">
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem component="button">
          <ListItemText primary="Configurações" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
