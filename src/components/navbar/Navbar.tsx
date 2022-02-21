import {ContentCopy, ContentCut, ContentPaste, LoginTwoTone} from '@mui/icons-material';
import {Divider, ListItemIcon, MenuItem, MenuList} from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

type Anchor = 'left';

const routes: { path: string; name: string; icon: JSX.Element; id: string }[] = [
    {path:'/',name:'Home',icon: <ContentCut fontSize="small" />,id:"1"},
    {path:'/taskDetails',name:'Task Details',icon: <ContentCut fontSize="small" />,id:"2"},
    {path:'/logout',name:'Logout', icon: <LoginTwoTone fontSize="small" />,id:"4"}];


const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
          (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
              return;
            }

            setState({ ...state, [anchor]: open });
          };

  const list = (anchor: Anchor) => (
      <Box
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {routes.map(({path,name,icon,id}) => (
            <MenuList key={id}>
                <MenuItem>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <Link to={path}>{name}</Link>
                </MenuItem>
            </MenuList>
          ))}
        </List>
        <Divider />
      </Box>
  );

  return (
      <div>
        {(['left'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
        ))}
      </div>
  );
};
export default TemporaryDrawer
