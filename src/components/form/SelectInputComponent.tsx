import * as React from 'react';

import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

function SelectInputComponent() {
  const [name, setName] = React.useState('');

  const handleChangeName = (event: SelectChangeEvent) => {
    setName(event.target.value);
  };
  return (
    <>
      <InputLabel>Assignee to</InputLabel>
      <Select name="John" label="Assignee to" onChange={handleChangeName}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="John Doe">John Doe</MenuItem>
        <MenuItem value="Jane Doe">Jane Doe</MenuItem>
        <MenuItem value="Elon Musk">Elon Musk</MenuItem>
        <MenuItem value="Bill Gates">Bill Gates</MenuItem>
      </Select>
      <FormHelperText>Person who is assigned</FormHelperText>
    </>
  );
}

export default SelectInputComponent;
