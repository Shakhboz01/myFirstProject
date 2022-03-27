import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { MenuLinks } from '../Data/data';
import { Link } from 'react-router-dom';
export default function Drawer() {
  const [state, setState] = React.useState({
   
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       
      <List>
        {MenuLinks.map((text, index) => (
            <Link style={{color:'black'}} key={text} to={text==="home"?`/`:`/${text}`} >
          <ListItem button >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text.toUpperCase()}  />
          </ListItem>
            </Link>
        ))}
      </List>
      <Divider />

    </Box>
  );

  return (
    <div>
      
        <React.Fragment >
      
          <WidgetsRoundedIcon  color='primary' style={{  cursor:"pointer"}} onClick={toggleDrawer('right', true)}>{'right'}</WidgetsRoundedIcon>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
      }
