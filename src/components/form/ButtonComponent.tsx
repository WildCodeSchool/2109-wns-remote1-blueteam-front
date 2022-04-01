import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TextButtonComponent } from '../../interfaces/text';
import colors from '../../theme/colors';

const useStyles = makeStyles({
  buttonStyle: {
    backgroundColor: colors.warningColor,
    mt: 2,
  },
});

const ButtonComponent: React.FC<TextButtonComponent> = ({ text }) => {
  const classes = useStyles();
  return (
    <>
      <Button
        sx={{ float: 'right' }}
        variant="contained"
        className={classes.buttonStyle}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
