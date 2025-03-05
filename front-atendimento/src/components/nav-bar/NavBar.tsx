import React from "react";
import MuiToolbar from "@mui/material/Toolbar";
import { AppBar, Box, Stack, styled, Typography } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

const Toolbar = styled(MuiToolbar)({
  width: "100%",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "12px",
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: "8px",
    p: "8px",
    pb: 0,
  },
});

const NavBar: React.FC = () => {
  //   return (
  //     <AppBar
  //       position="fixed"
  //       sx={{
  //         display: { xs: "auto", md: "none" },
  //         boxShadow: 0,
  //         bgcolor: "green",
  //         borderBottom: "1px solid",
  //         borderColor: "divider",
  //       }}
  //     >
  //       <Toolbar variant="regular">
  //         <Stack
  //           direction="row"
  //           sx={{
  //             alignItems: "center",
  //             flexGrow: 1,
  //             width: "100%",
  //             gap: 1,
  //           }}
  //         >
  //           <Stack
  //             direction="row"
  //             spacing={1}
  //             sx={{ justifyContent: "center", mr: "auto" }}
  //           >
  //             {/* <CustomIcon /> */}
  //             <Typography variant="h4" component="h1">
  //               Dashboard
  //             </Typography>
  //           </Stack>
  //         </Stack>
  //       </Toolbar>
  //     </AppBar>
  //   );
  // };

  //copiando tudo do outro projeto
  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: "auto", md: "none" },
        boxShadow: 0,
        bgcolor: "background.paper",
        backgroundImage: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        height: "50px",
        width: "100vw",
        // top: "var(--template-frame-height, 0px)",
      }}
    >
      <Toolbar variant="regular">
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            flexGrow: 1,
            width: "100%",
            gap: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", mr: "auto" }}
          >
            <CustomIcon />
            <Typography
              variant="h4"
              component="h1"
              // sx={{ color: "text.primary" }}
            >
              Teste Menu
            </Typography>
          </Stack>
          {/* <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuRoundedIcon />
          </MenuButton> */}
          {/* <SideMenuMobile open={open} toggleDrawer={toggleDrawer} /> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;

export function CustomIcon() {
  return (
    <Box
      sx={{
        width: "1.5rem",
        height: "1.5rem",
        bgcolor: "black",
        borderRadius: "999px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundImage:
          "linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)",
        color: "hsla(210, 100%, 95%, 0.9)",
        border: "1px solid",
        borderColor: "hsl(210, 100%, 55%)",
        boxShadow: "inset 0 2px 5px rgba(255, 255, 255, 0.3)",
      }}
    >
      <DashboardRoundedIcon color="inherit" sx={{ fontSize: "1rem" }} />
    </Box>
  );
}
