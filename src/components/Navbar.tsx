import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: 'background-color 0.3s', // Add smooth transition
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [navBarColor, setNavBarColor] = useState('transparent'); // Initial color

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 0.1 * window.innerHeight; // 10% of window height
    const newColor = scrollY > threshold ? 'new-color' : 'transparent'; // Define your color classes

    setNavBarColor(newColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pol Torres Alfonso
        </Typography>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#experience">Experience</Button>
        <Button color="inherit" href="#projects">Personal Projects</Button>
        <Button color="inherit" href="#hire">Hire Me</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;