import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SelectInputText } from '../../interfaces/selectInput';
import colors from '../../theme/colors';

const useStyles = makeStyles({
  textfieldCommentary: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colors.warningColor,
      },
    },
  },
  select: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.warningColor,
    },
  },
});

const SelectInputComponent: React.FC<SelectInputText> = ({ text }) => {
  const [, setName] = React.useState('');
  const classes = useStyles();

  const handleChangeName = (event: SelectChangeEvent) => {
    setName(event.target.value);
  };
  return (
    <>
      <InputLabel>{text}</InputLabel>
      <Select
        className={classes.select}
        name=""
        label={text}
        onChange={handleChangeName}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem />
      </Select>
      {/* <FormHelperText>Person who is assigned</FormHelperText> */}
    </>
  );
};

export default SelectInputComponent;
