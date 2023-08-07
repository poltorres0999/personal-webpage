import React from 'react';
import { Container, Typography } from '@mui/material';

const PersonalProjects: React.FC = () => {
  return (
    <Container id="projects" sx={{ my: 4, justifyContent: "center", display: "flex" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Personal Projects
      </Typography>
      {/* Add your content here */}
    </Container>
  );
};

export default PersonalProjects;