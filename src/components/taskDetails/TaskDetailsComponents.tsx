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
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import {
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
} from '@mui/material';
import colors from '../../theme/colors';

const theme = createTheme();

const useStyles = makeStyles((theme: Theme) => createStyles({
  //commentary
  textfieldCommentary: {
    '& .MuiOutlinedInput-root': {  
      '& fieldset': {            
          borderColor: 'pink',   
      },
      '&:hover fieldset': {
          borderColor: 'yellow', 
      },
      '&.Mui-focused fieldset': { 
          borderColor: 'green',
      },
  }}}));

const cards = [1, 2, 3];

const TaskDetailsComponents = () => {
  const classes = useStyles({});

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
      
        
          <Box
            sx={{
              backgroundColor: 'background.paper',
              pt: 2,
              pb: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} >
                <Container >
                <TextField className={classes.textfieldCommentary}
                  sx={{width: '100%'}}
                  id="outlined-multiline-static"
                  label="Details"
                  multiline
                  rows={4}
                  placeholder="Some details"
                />
                </Container>
              </Grid>
              <Grid item xs={6}>
                <form>
                  <FormControl sx={{ minWidth: 120 }}>
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
                      <Grid item xs={6} sx={{ mt: 2}}>
                        <Typography
                          component="h4"
                          variant="body2"
                          color="text.secondary"
                          
                          sx={{ whiteSpace: 'nowrap', }}
                        >
                          Initial estimed spent time :
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography style={{ backgroundColor: "lightgrey", width: '100px' }}
                          component="h4"
                          variant="body2"
                          color="text.secondary"
                         
                        >
                         <div >400 minutes</div>
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ mt: 2}}>
                        <Typography 
                          component="h4"
                          variant="body2"
                          color="text.secondary"
                        
                          sx={{ whiteSpace: 'nowrap' }}
                        >
                          Total time spent :
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ mt: 2}}>
                        <Typography style={{ backgroundColor: "lightgrey", width: '100px' }}
                          component="h4"
                          variant="body2"
                          color="text.secondary"
                         
                        >
                           <div >240 minutes</div>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sx={{ mt: 2}}><Box sx={{ width: 300 }}>
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
                    </Box></Grid>
                    <Grid item xs={6} sx={{ mt: 2}}>
                        <Typography
                          component="h4"
                          variant="body2"
                          color="text.secondary"
                          
                          sx={{ whiteSpace: 'nowrap' }}
                        >
                          Percentage time spent :
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ mt: 2}}>
                        <Typography style={{ backgroundColor: "lightgrey", width: '100px' }}
                          component="h4"
                          variant="body2"
                          color="text.secondary"
                         
                        >
                          <div >66%</div>
                          
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sx={{ mt: 2}}>
                      <Button color="warning" variant="contained" sx={{ mt: 2,
                     ':hover': {
                        color: "warning",
                        bgColor:"white",
                        },}}
                        >Update</Button>
                      </Grid>
                      <Grid item xs={12} sx={{ mt: 2}}>
                      <FormControl sx={{ minWidth: 120 }}>
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
       
      </ThemeProvider>
    </>
  );
};
export default TaskDetailsComponents;
