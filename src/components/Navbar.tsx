import React, { useEffect, useState } from 'react';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme()

  return (
    <div>
      <IconButton
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon sx={{color: theme.palette.getContrastText(theme.palette.grey[600])}}/>
      </IconButton>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} href="#about">About</MenuItem>
        <MenuItem onClick={handleClose} href="#experience">Experience</MenuItem>
        <MenuItem onClick={handleClose}href="#projects">Personal Projects</MenuItem>
        <MenuItem onClick={handleClose}href="#contact">Contact</MenuItem>
      </Menu>
    </div>
  );
};

const NavBar = () => {

  const theme = useTheme()

  const transparentNavBar = {
    bgcolor: theme.palette.grey[200],
    zindex: '0',
    color: theme.palette.text.primary,
    boxShadow: 'none',
    backDropFilter: 'blur(10px)'
  }

  const scrollNavBar = {
    bgcolor: theme.palette.grey[600],
    color: theme.palette.getContrastText(theme.palette.grey[600])

  }

  const [navBarScroll, setNavBarColor] = useState<boolean>(false); // Initial color
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 0.05 * window.innerHeight; // 10% of window height
    const scroll = scrollY > threshold;

    setNavBarColor(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" sx={navBarScroll || isSmallScreen? scrollNavBar : transparentNavBar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pol Torres Alfonso
        </Typography>
        {
          isSmallScreen ?
            (<DropdownMenu />) :
            <div>
              <Button color="inherit" href="#about">About</Button>
              <Button color="inherit" href="#experience">Experience</Button>
              <Button color="inherit" href="#projects">Personal Projects</Button>
              <Button color="inherit" href="#hire">Contact</Button>
            </div>
        }

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;