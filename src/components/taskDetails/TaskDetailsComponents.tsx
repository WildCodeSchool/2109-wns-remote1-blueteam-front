import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
} from '@mui/material';
import colors from '../../theme/colors';

const cards = [1, 2, 3];

const theme = createTheme();

const TaskDetailsComponents = () => {
  const [name, setName] = React.useState('');

  const handleChangeName = (event: SelectChangeEvent) => {
    setName(event.target.value);
  };

  const [status, setStatus] = React.useState('');

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

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

  function valuetext(value: number) {
    return `${value} minutes`;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 2,
              pb: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  component="h1"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  Details :
                </Typography>
                <Container maxWidth="sm">
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim hic modi quam! Aut dignissimos dolor facilis minima
                    placeat quos, ullam vel. Alias aperiam dolore eligendi
                    laborum magnam natus nihil suscipit. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Earum illum labore
                    magnam minus perspiciatis praesentium ullam voluptatibus?
                    Eos ex laudantium perferendis, perspiciatis ratione vero.
                    Deleniti dolore impedit numquam pariatur veritatis. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    aliquid, consectetur deserunt dignissimos eveniet expedita,
                    incidunt molestiae necessitatibus nostrum pariatur, quaerat
                    quia. Animi architecto at doloribus dolorum qui repellat
                    temporibus.
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={6}>
                <form>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Assignee to</InputLabel>
                    <Select
                      value={name}
                      label="Assignee to"
                      onChange={handleChangeName}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'John Doe'}>John Doe</MenuItem>
                      <MenuItem value={'Jane Doe'}>Jane Doe</MenuItem>
                      <MenuItem value={'Elon Musk'}>Elon Musk</MenuItem>
                      <MenuItem value={'Bill Gates'}>Bill Gates</MenuItem>
                    </Select>
                    <FormHelperText>Person who is assigned</FormHelperText>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography
                          component="h3"
                          variant="body2"
                          color="text.secondary"
                          align="center"
                          sx={{ whiteSpace: 'nowrap' }}
                        >
                          Initial time spent estimee
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          component="h4"
                          variant="body2"
                          color="text.secondary"
                          align="center"
                        >
                          240 minutes
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box sx={{ width: 300 }}>
                      <Slider
                        aria-label="Always visible"
                        defaultValue={40}
                        getAriaValueText={valuetext}
                        step={20}
                        marks={marks}
                        valueLabelDisplay="on"
                        max={240}
                        sx={{ color: colors.warningColor }}
                      />
                    </Box>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={status}
                      label="Status"
                      onChange={handleChangeStatus}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'In progress'}>in progress</MenuItem>
                      <MenuItem value={'Finish'}>Finish</MenuItem>
                      <MenuItem value={'Not Started'}>Not started</MenuItem>
                    </Select>
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
          <Container sx={{ py: 4 }} maxWidth="lg">
            {/* End hero unit */}

            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};
export default TaskDetailsComponents;
