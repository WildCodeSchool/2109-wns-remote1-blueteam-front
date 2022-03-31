import { TextField } from '@mui/material';

function TextFieldCommentary() {
  return (
    <>
      <TextField
        sx={{ width: '100%' }}
        id="outlined-multiline-static"
        label="Details"
        multiline
        rows={4}
        placeholder="Some details"
      />
    </>
  );
}

export default TextFieldCommentary;
