import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Button,
  createMuiTheme,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import colors from '../../theme/colors';
import DialogPopupProject from '../../components/dialog/DialogPopupProject';
import DialogPopupTasks from '../../components/dialog/DialogPopupTask';

// ***** TABLE ******

function createData(
  member: string,
  project: number,
  tasks: number,
  totaltasks: string,
  date: string
) {
  return { member, project, tasks, totaltasks, date };
}

const rows = [
  createData('Kevin Morby', 9, 2, '8h50', '01/01/22'),
  createData('Nick Drake', 3, 7, '1h50', '02/01/22'),
  createData('Adam Granduciel', 4, 6, '2h50', '03/01/22'),
  createData('Mark Speer', 2, 1, '6h50', '12/05/22'),
  createData('Kurt Vile', 4, 4, '7h50', '30/08/22'),
];

// ********

// **** POINTER *****

const pointer = { cursor: 'pointer' };

// ******

// **** SELECT ****

const TeamView = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  // ***********

  // **** DIALOG POPUP *****

  const emails = ['username@gmail.com', 'user02@gmail.com'];

  const [open, setOpen] = React.useState(false);
  const [openTask, setOpenTask] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpenProject = () => {
    setOpen(true);
  };

  const handleClickOpenTask = () => {
    setOpenTask(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setOpenTask(false);
    setSelectedValue(value);
  };

  // *********

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ mt: 2, ml: 2, width: '50%' }}>
            <FormControl fullWidth>
              <InputLabel>Team Member</InputLabel>
              <Select
                labelId=""
                id=""
                value={age}
                label="Team Member"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid display="flex" justifyContent="flex-end" item xs={6}>
          <Box sx={{ mt: 2, mr: 2 }}>
            <Button variant="contained">Add team member</Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ m: 2 }}>
            <TableContainer sx={{ minWidth: 650 }} component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: colors.tableHeaderColor }}>
                  <TableRow>
                    <TableCell>Team Member</TableCell>
                    <TableCell align="right">Projects</TableCell>
                    <TableCell align="right">Task Assigned</TableCell>
                    <TableCell align="right">Total Tasks Time</TableCell>
                    <TableCell align="right">Closest Due Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      style={
                        index % 2
                          ? { background: 'whitesmoke' }
                          : { background: 'white' }
                      }
                      key={row.member}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.member}
                      </TableCell>
                      <TableCell onClick={handleClickOpenProject} align="right">
                        <div style={pointer}>{row.project}</div>
                      </TableCell>
                      <TableCell onClick={handleClickOpenTask} align="right">
                        <div style={pointer}>{row.tasks}</div>
                      </TableCell>
                      <TableCell align="right">{row.totaltasks}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
      <DialogPopupProject
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <DialogPopupTasks
        selectedValue={selectedValue}
        open={openTask}
        onClose={handleClose}
      />
    </>
  );
};

export default TeamView;
