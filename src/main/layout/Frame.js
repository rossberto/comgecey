import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ListItem, List, IconButton, Hidden, Drawer, Divider, AppBar, CssBaseline,
         Button, Container, Typography, Toolbar, ListItemText, ListItemIcon  } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AppContext from '../../AppContext';

import nav from '../nav';
import { withCookies, useCookies } from 'react-cookie';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "50px",
    //marginRight: "50px",
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginLeft: "auto",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  signOutButton: {
    marginLeft: "auto",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingTop: "24px",
    //padding: theme.spacing(3),
    //height: '100vh',
    //overflow: 'auto',
  },
  container: {
    //alignItems: 'flex-start'
    //maxHeight: "800px"
    //backgroundColor: 'black'
  },
}));

const userNavMenu  = ['Mi Perfil', 'Mis Convocatorias'];
const adminNavMenu = ['Convocatorias', 'Usuarios', 'Mi Perfil', 'Mis Convocatorias']; //, 'Boletines'];

function Frame(props) {
  const { container } = props;
  const classes = useStyles(props);
  const theme = useTheme();

  const appContext = useContext(AppContext);
  const {auth, goDashboard, userSession } = appContext;
  const [navMenu, setNavMenu] = useState(adminNavMenu);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (userSession.is_admin) {
      setNavMenu(adminNavMenu);
    } else {
      setNavMenu(userNavMenu);
    }
  });

  function handleClick(e, text) {
    switch (text) {
      case 'Mi Perfil':
          nav(`/users/${userSession.id}`);
        break;
      case 'Convocatorias':
          nav('/convocatories');
        break;
      case 'Mis Convocatorias':
          nav('/myconvocatories');
        break;
      case 'Usuarios':
          nav('/users');
        break;
      /*
      case 'Landing':
          nav('/landing');
        break;
      case 'Registro':
          nav('/register');
        break;
      case 'Blog':
          nav('/blog');
        break;
      */
      default:

    }
  }

  function handleSignOut() {
    removeCookie('userId');
    goDashboard(false);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {navMenu.map((text, index) => (
          <ListItem button ContainerProps={{name: text}} key={text} onClick={(e) => handleClick(e, text)}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon name={text} /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Comgecey', 'Blog'].map((text, index) => (
          <ListItem button value={text} key={text} onClick={(e) => handleClick(e, text)}>
            <ListItemIcon value={text}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText value={text} primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Plataforma Comgecey
          </Typography>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleSignOut}
            className={classes.signOutButton}
          >
            <font size="4">Salir</font>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Container maxWidth="lg" className={classes.container}>
            {props.children}
          </Container>
        </div>
      </main>
    </div>
  );
}

Frame.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default withCookies(Frame);
