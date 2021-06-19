import React from 'react';
import { AppBar, Typography,Toolbar, Box } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import useStyles from './styles';

const Navbar = () => {
  
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img className={classes.image} src="http://wp.usatodaysports.com/wp-content/uploads/sites/90/2013/06/b9hvwjslf7jzh18ej6y4.gif" alt="icon" height="60" />
        <Typography className={classes.heading} variant="h6" align="center">Doctor e-clinics</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
      <Box alignItems = "center" display="flex">
      <Box>
      <LocalHospitalIcon style={{color:'white', fontSize: 35, marginLeft:'24px',}}  /><br></br>
      <span style={{color:'white'}}><b>Find a doctor</b></span>
      </Box>
      </Box>

      <Box style={{ marginLeft:'50px',}} alignItems = "center" display="flex">
      <Box>
      <AccessTimeIcon style={{color:'white', fontSize: 35, marginLeft:'24px',}}  /><br></br>
      <span style={{color:'white'}}><b>Appointments</b></span>
      </Box>
      </Box>

      <Box style={{ marginLeft:'50px',}} alignItems = "center" display="flex">
      <Box>
      <ChatBubbleOutlineIcon style={{color:'white', fontSize: 35, marginLeft:'24px',}}  /><br></br>
      <span style={{color:'white'}}><b>Chat with Doctor</b></span>
      </Box>
      </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
