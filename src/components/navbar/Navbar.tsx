import { ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material';
import {
  Divider,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo_solo from '../../assets/images/index';

const Navbar: FC = () => (
  <div>
    <div>
      <Paper sx={{ height: '100vh', width: 300, maxWidth: '100%' }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <Link to="/myfirstpage">My First Component</Link>
          </MenuItem>
          <Divider />
        </MenuList>
      </Paper>
    </div>
  </div>
);

export default Navbar;
