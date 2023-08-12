import React from 'react';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {

  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[200],
          width: '100%',
        }}
      >
        <Container sx={{ justifyContent: "center", display: "flex", pt: 6, pb: 6 }}>
          <Stack justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={2}>
              <a href="https://es.linkedin.com/in/poltorresalfonso" target='_blank'><LinkedInIcon /></a>
              <a href="https://github.com/poltorres0999" target='_blank'><GitHubIcon /></a>
            </Stack>
            <Typography variant="body2" color={theme.palette.text.secondary}>
              &copy; {currentYear} Pol Torres Alfonso. All rights reserved.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;