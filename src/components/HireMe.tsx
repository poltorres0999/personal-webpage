import React from 'react';
import { Container, Typography, Button, Stack, Chip, Box, useTheme} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const HireMe: React.FC = () => {

  const theme = useTheme();

  const phone = "+34 658 39 99 73"
  const handleEmailClick = () => {
    window.location.href = 'mailto:your.email@example.com';
  };


  return (
    <Box sx={{ mt: 4, p: 2, backgroundColor: theme.palette.grey[200] }}>
      <Container id="contact" sx={{ my: 4, justifyContent: "center", display: "flex" }}>
        <Stack spacing={2} justifyItems={"center"} alignItems={"center"}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Get in touch!
          </Typography>
          <Typography>
            If you are looking for an employee or want to know more about me, then get in touch.
          </Typography>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Button onClick={handleEmailClick} startIcon={<EmailIcon />} variant='contained' sx={{ borderRadius: '50px' }}>
              Say hello!
            </Button>
            <Chip label={phone} icon={<PhoneIcon />} size='medium' />
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
        </Stack>
      </Container>
    </Box>
  );
};

export default HireMe;
