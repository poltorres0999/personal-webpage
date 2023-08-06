import React from 'react';
import { Container, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Stack direction="row" spacing={2}>
          <a href="https://www.linkedin.com/your-link"><LinkedInIcon /></a>
          <a href="https://github.com/your-username"><GitHubIcon /></a>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;