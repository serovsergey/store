import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//import {useAuth} from '../context/auth_old';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MainMenu from './MainMenu';
import useAuth from '../auth'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Header(props) {
    //const {userData, setUserData} = useAuth();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const open = Boolean(anchorEl);
    const [loggingOut, setLoggingOut] = useState(false);

    const Auth = useAuth();

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if(loggingOut) {
        return <Redirect to='/login' />;
    }

    return (
        <>
        <AppBar position="sticky">
            <Toolbar variant='dense'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => (setMenuVisible(true))}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Текущий объект
            </Typography>

                <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    //onMouseOver={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Профиль</MenuItem>
                    <MenuItem onClick={handleClose}>Мой аккаунт</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to={'/admin'}>Админ</MenuItem>                    
                    <MenuItem onClick={() => {Auth.logout();handleClose();setLoggingOut(true);}}>Выйти</MenuItem>
                </Menu>
                </div>

            </Toolbar>
        </AppBar>
        <MainMenu visible={menuVisible} setVisible={setMenuVisible}/>
        </>
    )
}
export default Header;