import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateInputs = () => {
    if (!type || !duration || !date) {
      setError("Type, duration, and date are required.");
      return false;
    }
    return true;
  };

  const handleAddWorkoutClick = () => {
    if (validateInputs()) {
      setLoading(true);
      // Here you can handle the addition of a new workout
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Workouts</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <TextField
        label="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <TextField
        label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <TextField
        label="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={handleAddWorkoutClick}
      >
        {loading ? <CircularProgress size={24} /> : "Add Workout"}
      </Button>
      <List>
        {workouts.map((workout, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={workout.type}
              secondary={`Duration: ${workout.duration}, Date: ${workout.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Workouts;
