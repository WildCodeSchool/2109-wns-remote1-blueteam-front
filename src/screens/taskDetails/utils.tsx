import { createStyles, createTheme, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import colors from '../../theme/colors';

const theme = createTheme();

const useStyles = makeStyles(() =>
  createStyles({
    // commentary
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
  })
);

export default useStyles;
