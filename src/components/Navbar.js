import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = ({ setActiveComponent }) => {
  return (
    <AppBar position="static" style={{ background: "#333" }}>
      <Toolbar>
        <Button color="inherit" onClick={() => setActiveComponent("Login")}>
          <Typography variant="h6">Login</Typography>
        </Button>
        <Button color="inherit" onClick={() => setActiveComponent("Dashboard")}>
          <Typography variant="h6">Dashboard</Typography>
        </Button>
        <Button color="inherit" onClick={() => setActiveComponent("Profile")}>
          <Typography variant="h6">Profile</Typography>
        </Button>
        <Button color="inherit" onClick={() => setActiveComponent("Goals")}>
          <Typography variant="h6">Goals</Typography>
        </Button>
        <Button color="inherit" onClick={() => setActiveComponent("Signup")}>
          <Typography variant="h6">Signup</Typography>
        </Button>
        <Button color="inherit" onClick={() => setActiveComponent("Workouts")}>
          <Typography variant="h6">Workouts</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
