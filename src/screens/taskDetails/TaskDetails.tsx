import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {
  FormControl,
  SelectChangeEvent,
  Slider,
  Typography,
} from '@mui/material';
import TextFieldCommentary from '../../components/form/TextFieldCommentary';
import colors from '../../theme/colors';
import SelectInputComponent from '../../components/form/SelectInputComponent';
import CardComponent from '../../components/form/CardComponent';
import ButtonComponent from '../../components/form/ButtonComponent';

function valuetext(value: number) {
  return `${value} minutes`;
}

const mdTheme = createTheme();

const TaskDetails = () => {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 80,
      label: '80',
    },
    {
      value: 120,
      label: '120',
    },
    {
      value: 160,
      label: '160',
    },
    {
      value: 200,
      label: '200',
    },
    {
      value: 240,
      label: '240',
    },
  ];

  const cards = [1, 2, 3];

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    backgroundColor: 'background.paper',
                    pt: 2,
                    pb: 2,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Container>
                        <TextFieldCommentary />
                      </Container>
                    </Grid>
                    <Grid item xs={6}>
                      <form>
                        <FormControl sx={{ minWidth: 120 }}>
                          <SelectInputComponent text="Assigned to" />
                          <Grid container>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                              <Typography
                                component="h4"
                                variant="body2"
                                color="text.secondary"
                                sx={{ whiteSpace: 'nowrap' }}
                              >
                                Initial estimed spent time :
                              </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                              <Typography
                                style={{
                                  backgroundColor: 'lightgrey',
                                  width: '100px',
                                }}
                                component="h4"
                                variant="body2"
                                color="text.secondary"
                              >
                                <div>400 minutes</div>
                              </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                              <Typography
                                component="h4"
                                variant="body2"
                                color="text.secondary"
                                sx={{ whiteSpace: 'nowrap' }}
                              >
                                Total time spent :
                              </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                              <Typography
                                style={{
                                  backgroundColor: 'lightgrey',
                                  width: '100px',
                                }}
                                component="h4"
                                variant="body2"
                                color="text.secondary"
                              >
                                <div>240 minutes</div>
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                              <Box sx={{ width: 300 }}>
                                <Slider
                                  defaultValue={40}
                                  getAriaValueText={valuetext}
                                  step={20}
                                  marks={marks}
                                  valueLabelDisplay="on"
                                  max={240}
                                  sx={{ color: colors.warningColor }}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                              <Typography
                                component="h4"
                                variant="body2"
                                color="text.secondary"
                                sx={{ whiteSpace: 'nowrap' }}
                              >
                                Percentage time spent :
                              </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                              <Typography
                                style={{
                                  backgroundColor: 'lightgrey',
                                  width: '100px',
                                }}
                                component="h4"
                                variant="body2"
                                color="text.secondary"
                              >
                                <div>66%</div>
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                              <FormControl
                                sx={{ minWidth: 120, width: '100%' }}
                              >
                                <SelectInputComponent text="Status" />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                              <ButtonComponent text="Update" />
                            </Grid>
                          </Grid>
                        </FormControl>
                      </form>
                    </Grid>
                  </Grid>
                </Box>
                <Typography
                  component="h1"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  Assets :
                </Typography>
                <Grid container spacing={4}>
                  {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <CardComponent />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default TaskDetails;
