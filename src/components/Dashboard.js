import React, { useState } from "react";
import { Container, Typography, Grid, Button, Paper } from "@mui/material";

const Dashboard = () => {
  const [summary, setSummary] = useState({
    totalWorkouts: 0,
    totalDuration: 0,
    goalsAchieved: 0
    // Add more summary stats as needed
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSummary = () => {
    setLoading(true);
    // Here you can handle the fetching of summary data
    setLoading(false);
  };

  return (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper>
            <Typography variant="h6">
              Total Workouts: {summary.totalWorkouts}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Typography variant="h6">
              Total Duration: {summary.totalDuration}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Typography variant="h6">
              Goals Achieved: {summary.goalsAchieved}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={fetchSummary}
      >
        {loading ? <CircularProgress size={24} /> : "Fetch Summary"}
      </Button>
    </Container>
  );
};

export default Dashboard;
