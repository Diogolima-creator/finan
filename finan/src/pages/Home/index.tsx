import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import GroupIcon from '@mui/icons-material/Group';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge'
import { setMenuSelected } from '../../store/menu';
import { CreateGroup, MyGroup, Friends, Invites, Profile, Settings } from './Components';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const icons:[any, number][] = [[<GroupIcon/>, 0], [<GroupAddIcon/>,1], [<Badge badgeContent={22} color="primary">
  <MailIcon color="action" />
</Badge>,2], [<PersonAddIcon/>,3] ]
  const iconsTwo:[any, number][] = [ [<AccountCircleIcon/>,4], [<SettingsIcon/>,5], [<LogoutIcon/>,6]]
  const menuTitles = ['Meus grupos', 'Criar um novo grupo', 'Convites', 'Amizades', 'Meu perfil', 'Configurações']
  const menuSelected = useAppSelector((state)=> state.menu.menuSelected)
  const dispatch = useAppDispatch()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuSelected = (num:number) => {
    dispatch(
      setMenuSelected(num)
    )
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {menuTitles[menuSelected]} 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Meus grupos', 'Criar um Grupo', 'Convites', 'Amizades'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick = {() => handleMenuSelected(icons[index][1])}>
                <ListItemIcon>
                  {icons[index][0]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Meu Perfil', 'Configurações', 'Sair'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick = {() => handleMenuSelected(iconsTwo[index][1])}>
                <ListItemIcon>
                  {iconsTwo[index][0]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main style={{ display:'flex', flexDirection: 'column', alignItems: 'center' }} open={open}>
        <DrawerHeader />    
          {menuSelected === 0 && <MyGroup />}
          {menuSelected === 1 && <CreateGroup />}
          {menuSelected === 2 && <Invites />}
          {menuSelected === 3 && <Friends />}
          {menuSelected === 4 && <Profile />}
          {menuSelected === 5 && <Settings /> }  
      </Main>
    </Box>
  );
}