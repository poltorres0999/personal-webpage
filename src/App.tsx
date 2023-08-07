import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import PersonalProjects from './components/PersonalProjects';
import HireMe from './components/HireMe';
import Footer from './components/Footer';
import Greet from './components/Greet';
import { Container, Stack } from '@mui/material';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Greet />
      <About />
      <Experience />
      <PersonalProjects />
      <HireMe />
      <Footer />
    </div>
  );
};

export default App;