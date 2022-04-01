import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import colors from '../../theme/colors';
import { TextFieldContent } from '../../interfaces/textFieldContent';

const useStyles = makeStyles({
  textfieldStyle: {
    height: '100%',
    width: '100%',

    mt: 2,

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colors.warningColor,
      },
    },
  },
});
function TextFieldCommentary() {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.textfieldStyle}
        id="outlined-multiline-static"
        label="Details"
        multiline
        placeholder="Some details"
        rows={16}
      />
    </>
  );
}

export default TextFieldCommentary;
