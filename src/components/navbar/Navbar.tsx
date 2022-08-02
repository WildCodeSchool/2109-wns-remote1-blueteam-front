import * as React from 'react';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import { MenuItem, MenuList } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import Avatar from '@mui/material/Avatar';

import { stringToColor, stringAvatar } from '../../services/avatarServices';
import useLogoutMutation from '../../screens/logout/Logout';
import useUser from '../../hooks/useUser';
import Copyright from '../copyright/Copyright';

// ------- Navbar styles -------
const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: 63,
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

// ------- Navbar logic -------
const MiniDrawer: React.FC = ({ children }) => {
  const [user, setUser] = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  let avatarIcon = <></>;

  if (user) {
    avatarIcon = (
      <Avatar
        alt={`${user.firstname} ${user.lastname}`}
        src={user.avatar || '.'}
        sx={{
          width: 25,
          height: 25,
          minWidth: 12,
          minHeight: 12,
          border: 2,
          borderColor: '#1565c0',
          bgcolor: stringToColor(`${user.firstname} ${user.lastname}`),
          fontSize: 10,
        }}
      >
        {user.avatar ? '' : stringAvatar(`${user.firstname} ${user.lastname}`)}
      </Avatar>
    );
  }
  // ------- Match route path and names and define icons for the menu -------
  // TODO ReduX
  const routes: {
    path: string;
    name: string;
    icon: JSX.Element;
    id: string;
  }[] = [
    {
      path: '/',
      name: 'Home',
      icon: <HomeIcon fontSize="medium" sx={{ fill: '#FF7F50' }} />,
      id: '1',
    },
    {
      path: '/projects',
      name: 'Projects List',
      icon: <ArticleIcon fontSize="medium" sx={{ fill: '#FF7F50' }} />,
      id: '2',
    },
    {
      path: '/taskDetails',
      name: 'Task Details',
      icon: <ListAltIcon fontSize="medium" sx={{ fill: '#FF7F50' }} />,
      id: '3',
    },
    {
      path: '/teamview',
      name: 'Team View',
      icon: <GroupsIcon fontSize="medium" sx={{ fill: '#FF7F50' }} />,
      id: '4',
    },
    {
      path: '/profile',
      name: 'Profile',
      icon: avatarIcon,
      id: '5',
    },
  ];

  const currentPageName = () => {
    const route = routes.find(({ path }) => path === location.pathname);
    return route?.name || '';
  };
  const [pageName, setPageName] = React.useState('');
  React.useEffect(() => {
    const currentpage = currentPageName();
    setPageName(currentpage);
  });

  // ------- Logout -------
  const logout = useLogoutMutation();

  const logoutAndRedirect = async () => {
    await logout.logoutMutation();
    navigate('/signin', { replace: true });
    setUser(null);
  };

  const theme = useTheme();
  // TODO remplacer les couleurs par le dossier Color

  // ------- Handle drawer toggling -------
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {user && (
        <AppBar position="sticky" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {pageName}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {user && (
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <MenuList
              sx={{ py: 1, display: 'flex', flexFlow: 'column nowrap', gap: 2 }}
            >
              {routes.map(({ path, name, icon, id }) => (
                <MenuItem key={id}>
                  <Link
                    to={path}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: '#197BBD',
                    }}
                  >
                    <ListItemIcon sx={{ mr: 1 }}>{icon}</ListItemIcon>
                    {name}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem
                key="5"
                onClick={async () => {
                  await logoutAndRedirect();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: '#197BBD',
                }}
              >
                <ListItemIcon sx={{ mr: 1 }}>
                  <LogoutIcon fontSize="medium" sx={{ fill: '#FF7F50' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </MenuList>
            <Divider />
          </Drawer>
        )}
        <Box
          component="main"
          sx={{
            width: '100%',
            flexGrow: 1,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            ...(open && {
              width: `calc(100% - ${drawerWidth}px)`,
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }),
          }}
        >
          {children}
          <Copyright />
        </Box>
      </Box>
    </>
  );
};
export default MiniDrawer;
