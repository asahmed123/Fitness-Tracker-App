import React, { useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Container,
  Typography
} from "@mui/material";

const Signup = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    if (!email || !password || !name) {
      setError("Email, password, and name are required.");
      return false;
    }
    return true;
  };

  const handleSignupClick = () => {
    if (validateInputs()) {
      setLoading(true);
      // Here you can handle the signup logic
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Signup</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={handleSignupClick}
      >
        {loading ? <CircularProgress size={24} /> : "Signup"}
      </Button>
    </Container>
  );
};

export default Signup;
