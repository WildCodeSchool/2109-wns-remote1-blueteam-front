import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogPopup } from '../../interfaces/dialog';

function DialogPopupProject(props: DialogPopup) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  // const handleListItemClick = (value: string) => {
  //   onClose(value);
  // };

  return (
    <Dialog
      BackdropProps={{
        style: { backgroundColor: 'transparent' },
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle sx={{ pl: '16px' }}>Name related projects : </DialogTitle>
      <List dense>
        <ListItem>
          <ListItemText primary="Acme" secondary="See more" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Blue" secondary="See more" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default DialogPopupProject;
