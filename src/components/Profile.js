import React, { useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Container,
  Typography
} from "@mui/material";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateInputs = () => {
    if (!name || !email) {
      setError("Name and email are required.");
      return false;
    }
    return true;
  };

  const handleUpdateClick = () => {
    if (validateInputs()) {
      setLoading(true);
      // Here you can handle the profile update logic
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Profile</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={handleUpdateClick}
      >
        {loading ? <CircularProgress size={24} /> : "Update"}
      </Button>
    </Container>
  );
};

export default Profile;
