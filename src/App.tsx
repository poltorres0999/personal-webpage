import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import PersonalProjects from './components/PersonalProjects';
import HireMe from './components/HireMe';
import Footer from './components/Footer';
import Greet from './components/Greet';
import { Container, Stack } from '@mui/material';
import ScrollTop from './components/utils/ScrollToTop';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div id="back-to-top-anchor">

      </div>
      <Greet />
      <About />
      <Experience />
      <PersonalProjects />
      <HireMe />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default App;