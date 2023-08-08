import React from 'react';
import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import ChipList from './utils/ChipList';


const KyndrylExperience = () => {

  const skills = [
    { name: 'Python3', link: '' },
    { name: 'FastAPI', link: '' },
    { name: 'MongoDB', link: '' },
    { name: 'SQL', link: '' },
    { name: 'TypeScript', link: '' },
    { name: 'React', link: '' },
    { name: 'AngularJS', link: '' },
    { name: 'Docker', link: '' },
    { name: 'Kubernetes / OCP', link: '' },
    { name: 'CI/CD', link: '' },
    { name: 'Grafana', link: '' },
    { name: 'Jenkins', link: '' },
    { name: 'Prometheus', link: '' },
    { name: 'Loki', link: '' },
    { name: 'Promtail', link: '' }
  ];

  return (
    <Stack justifyContent="center" alignItems="center" spacing={1}>
      <Stack spacing={0.5} justifyContent="center" alignItems="center">
        <img src={process.env.PUBLIC_URL + '/kyndryl.png'} alt="Local" width={250} />
        <Typography> 2020 - Present </Typography>
      </Stack>
      <ChipList items={skills} />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={9} sx={{my:2}}>
          <Typography variant='body1' align='justify'>
            At Kyndryl, I primarily worked as a full stack software developer and DevOps engineer. I was involved in various departments, including <b>Monitoring</b>, <b>Operations</b>, and <b>Automation</b>.
          </Typography>
          <br></br>
          <Typography align='justify'>
            In each of these departments, I contributed my software engineering expertise to develop and deploy intuitive tools that have helped streamline and automate team and client tasks. I implemented <b>monitoring solutions</b> to ensure proper service control and created pipelines to meet <b>CI/CD</b> requirements by <b>containerizing applications</b> and advocating for the use of <b>infrastructure as code</b>.
          </Typography>
        </Grid>
      </Grid>
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
