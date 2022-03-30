import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';
import { DialogPopup } from '../../interfaces/dialog';

function DialogPopupTasks(props: DialogPopup) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      BackdropProps={{
        style: { backgroundColor: 'transparent' },
      }}
      open={open}
    >
      <DialogTitle sx={{ pl: '16px' }}>Name related tasks : </DialogTitle>
      <Typography sx={{ pl: '16px' }}>Login Page Front-end</Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Estimed time" secondary="4h" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Total spent time" secondary="3h30" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Due Date" secondary="01/02/2022" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default DialogPopupTasks;
