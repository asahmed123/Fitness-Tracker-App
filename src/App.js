import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Goals from "./components/Goals";
import Signup from "./components/Signup";
import Workouts from "./components/Workouts";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Login");

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      {activeComponent === "Login" && <Login />}
      {activeComponent === "Dashboard" && <Dashboard />}
      {activeComponent === "Profile" && <Profile />}
      {activeComponent === "Goals" && <Goals />}
      {activeComponent === "Signup" && <Signup />}
      {activeComponent === "Workouts" && <Workouts />}
    </div>
  );
};

export default App;
