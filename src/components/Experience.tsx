import React from 'react';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import ChipList from './utils/ChipList';


const KyndrylExperience = () => {

  const skills: string[] = ["Python3", "FastAPI", "MongoDB", "SQL", "TypeScript", "React", "AngularJS", "Docker", "Kubernetes / OCP", "CI/CD", "Grafana", "Jenkins", "Prometheus", "Loki", "Promtail"];


  return (
    <Stack justifyContent="center" alignItems="center" spacing={1}>
      <Stack spacing={0.5} justifyContent="center" alignItems="center">
        <img src={process.env.PUBLIC_URL + '/kyndryl.png'} alt="Local" width={250} />
        <Typography> 2020 - Present </Typography>
      </Stack>
      <ChipList items={skills} />
    </Stack>
  )
}

const Experience: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ my: 4, backgroundColor: theme.palette.grey[200] }}>
      <Container id="experience" sx={{ p: 2 }}>
        <Stack spacing={4} justifyContent="center" alignItems="center" sx={{ maxWidth: "80%", mx: "auto" }}>
          <Typography variant="h4" sx={{ my: 4 }}>
            Experience
          </Typography>
          <KyndrylExperience />
        </Stack>

      </Container>
    </Box>
  );
};

export default Experience;
