import Drawer from "./Drawer";

import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import { Toolbar,Tooltip } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { MenuLinks } from "../Data/data";
import { LinkContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from '../photos/bestlogo.png'

 
const settings = ['97 912-21-12', '97 777-77-77', 'shf@gmail.com'];

const ResponsiveAppBar = ({value}) => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null); 
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{background:'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9) )',opacity:0.9} } position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}

          >
<img style={{width:"70px",height:'60px'}}  src={Logo} />             
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Drawer/>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {MenuLinks.map((page) => (
                  
                <MenuItem   key={page} onClick={handleCloseNavMenu}>
                    <Link to={page==="home"?`/`:`/${page}`}   >
                  <Typography  textAlign="left">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {MenuLinks.map((page) => (
              <Link key={page} to={page==="home"?`/`:`/${page}`}   >
              <Button
            //  style={{cursor:page===value&&'none'}}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  color:value===page?"blue":"white" ,
                display: 'block', 
              }}
              style={{cursor:`${page===value&&"not-allowed"}`}}
                
                >
                {page}
              </Button>
                  </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Contact us">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Aa7Ov4fUO_xcdTXn40xyn4GVDluysDSR8w&usqp=CAU" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};






function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 40 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  
  window: PropTypes.func,
};

 function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
        <ResponsiveAppBar value={props.value}  />
        </AppBar>
      </ElevationScroll>
     
     
    </React.Fragment>
  );
}


export default ElevateAppBar;
