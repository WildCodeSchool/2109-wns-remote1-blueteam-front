import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';
import { DialogPopup } from '../../interfaces/dialog';

const emails = ['Project 1', 'Project 2'];

function DialogPopupTasks(props: DialogPopup) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      BackdropProps={{
        style: { backgroundColor: 'transparent' },
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>Name related projects : </DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemText primary={email} />
            <Typography>See More</Typography>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default DialogPopupTasks;
