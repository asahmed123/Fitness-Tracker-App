import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const Goals = () => {
  const [goals, setGoals] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateInputs = () => {
    if (!goals) {
      setError("Goals are required.");
      return false;
    }
    return true;
  };

  const handleUpdateGoalsClick = () => {
    if (validateInputs()) {
      setLoading(true);
      // Here you can handle the goals update logic
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Goals</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Goals"
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={handleUpdateGoalsClick}
      >
        {loading ? <CircularProgress size={24} /> : "Update Goals"}
      </Button>
    </Container>
  );
};

export default Goals;
