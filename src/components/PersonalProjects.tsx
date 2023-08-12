import React from 'react';
import { Box, Chip, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import ChipList from './utils/ChipList';
import GitHubIcon from '@mui/icons-material/GitHub';

const DevOpsProjects = () => {
  const DockerFastAPIMonitoringSkills = [
    { name: 'FastAPI', link: '' },
    { name: 'Docker', link: '' },
    { name: 'Grafana', link: '' },
    { name: 'Prometheus', link: '' },
    { name: 'Loki', link: '' },
    { name: 'Promtail', link: '' },
    { name: 'Prometheus', link: '' },
  ];
  return (
    <Stack spacing={1.5} justifyContent="center" alignItems="center">
      <Typography textAlign={"center"} fontWeight={"bold"} variant='body1'>Monitoring FastAPI Applications with Promtail, Loki, Grafana, Prometheus and Docker</Typography>
      <ChipList items={DockerFastAPIMonitoringSkills} />
      <Typography variant='body1' align='justify'>Simple and practical implementation of monitoring a FastAPI application using popular open-source monitoring tools: Promtail, Loki, Grafana, and Prometheus. The goal of this project is to showcase an effective monitoring setup that helps you gain insights into your FastAPI application’s logs and metrics, enabling you to identify and troubleshoot issues quickly.</Typography>
      <Chip
        label={"Monitoring FastAPI Applications with Promtail, Loki, Grafana, Prometheus and Docker"}
        component="a"  // Use anchor element
        target="_blank"  // Open link in a new tab
        href={'https://poltorres0999.github.io/monitoring-fastapi-sample'}  // Set the link URL
        icon={<GitHubIcon />}
        sx={{ margin: '0.5rem'}}
      />
    </Stack>
  )

}


const PersonalProjects: React.FC = () => {
  const theme = useTheme()

  return (
    <Box sx={{ my: 4 }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={9} sx={{ my: 2 }}>
          <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ maxWidth: "80%", mx: "auto" }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Check My Skills
            </Typography>
            <Typography>
              Check out a bunch of personal projects I've put together to show off my skills. These projects aren't meant for production, but they're like little showcases of how I organize, code, and document things. And if your system meets the requirements, you can actually download and try them out firsthand.
            </Typography>
            <Typography fontWeight={"bold"} textAlign={"center"} variant='h5'>DevOps related projects</Typography>
            <DevOpsProjects />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );

};

export default PersonalProjects;