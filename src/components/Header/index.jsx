import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Register from "../../features/Auth/components/Register";


export default function Header() {

      const [open , setOpen ] = useState(false) ;

      const handleClose = ()=> {
            setOpen(false) ;
      } ;

      const handleClickOpen = ()=> {
            setOpen(true) ;
      } ;
  return (

      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
     
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>



      <Dialog  disableEscapeKeyDown open={open} onClose={handleClose}>
      
        <DialogContent>
          <DialogContentText>
                  <Register/>
          </DialogContentText>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

        </DialogActions>
      </Dialog>

    </Box>
  );
}