import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../logo.svg';
import './navber.scss';

function Navber() {
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer">
                    <MenuIcon/>
                </IconButton>

                <Typography variant="h6" noWrap className="logo">
                    <img src={Logo} alt="logo"/>
                </Typography>

            </Toolbar>
        </AppBar>
    );
}
export default Navber;