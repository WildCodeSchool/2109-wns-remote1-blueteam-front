import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TaskDetailsComponents from '../../components/taskDetails/TaskDetailsComponents';
import Copyright from '../../components/copyright/Copyright';

const mdTheme = createTheme();

const DashboardContent = () => (
  <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <TaskDetailsComponents />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </ThemeProvider>
);

export default function Dashboard() {
  return <DashboardContent />;
}
