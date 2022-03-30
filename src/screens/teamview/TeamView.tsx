import * as React from 'react';
import Paper from '@mui/material/Paper';
import colors from '../../theme/colors';

import {
  Button,
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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: string,
  protein: string
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Kevin Morby', 9, 2, '8h50', '01/01/22'),
  createData('Nick Drake', 3, 7, '1h50', '02/01/22'),
  createData('Adam Granduciel', 4, 6, '2h50', '03/01/22'),
  createData('Mark Speer', 2, 1, '6h50', '12/05/22'),
  createData('Kurt Vile', 4, 4, '7h50', '30/08/22'),
];

const TeamView = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ mt: 2, ml: 2, width: '50%' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
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
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TeamView;
