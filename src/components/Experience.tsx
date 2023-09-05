import React from 'react';
import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import ChipList from './utils/ChipList';


const EurecatExperience = () => {
  const skills = [
    { name: 'Python3', link: '' },
    { name: 'Java', link: '' },
    { name: 'AngularJS', link: '' },
    { name: 'SpringBoot', link: '' },
    { name: 'PostgreSQL', link: '' },
  ];

  return (
    <Stack justifyContent="center" alignItems="center" spacing={1}>
      <Stack spacing={0.5} justifyContent="center" alignItems="center">
        <img src={process.env.PUBLIC_URL + '/eurecat.png'} alt="Local" width={250} />
        <Typography>Jun. 2018 – Aug. 2018</Typography>
      </Stack>
      <ChipList items={skills} />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={9} sx={{ my: 2 }}>
          <Stack spacing={1}>
            <Typography variant='body1' align='justify'>
              During my junior role, I collaborated with the University of Lleida on multiple European research projects. My focus was on developing tools and scripts to support researchers. I used Python 3, AngularJS, Spring Boot, and PostgreSQL to create solutions that facilitated their work. This experience allowed me to actively contribute to research efforts in collaboration with the university.
            </Typography>
          </Stack></Grid>
      </Grid>
    </Stack>
  )
}


const MinsaitExperience = () => {
  const skills = [
    { name: 'Python3', link: '' },
    { name: 'Java', link: '' },
    { name: 'Scala', link: '' },
    { name: 'MongoDB', link: '' },
  ];

  return (
    <Stack justifyContent="center" alignItems="center" spacing={1}>
      <Stack spacing={0.5} justifyContent="center" alignItems="center">
        <img src={process.env.PUBLIC_URL + '/minsait.png'} alt="Local" width={250} />
        <Typography> Mar. 2019 – Sep. 2019 </Typography>
      </Stack>
      <ChipList items={skills} />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={9} sx={{ my: 2 }}>
          <Stack spacing={1}>
            <Typography variant='body1' align='justify'>
              During my role as a Junior Software and Big Data Developer at Minsait from Mar. 2019 to Sep. 2019, I participated in projects for the Spanish Government. I worked on data processing and extraction from car pollution data lakes, using Scala and MongoDB. I also contributed to performance improvement and optimization of existing Java projects.
            </Typography>
          </Stack></Grid>
      </Grid>
    </Stack>
  )
}

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
        <Grid item xs={12} sm={9} sx={{ my: 2 }}>
          <Stack spacing={1}>
            <Typography variant='body1' align='justify'>
              At Kyndryl, I primarily worked as a full stack software developer and DevOps engineer. I was involved in various departments, including <b>Monitoring</b>, <b>Operations</b>, and <b>Automation</b>.
            </Typography>
            <Typography align='justify'>
              In each of these departments, I contributed my software engineering expertise to develop and deploy intuitive tools that have helped streamline and automate team and client tasks. I implemented <b>monitoring solutions</b> to ensure proper service control and created pipelines to meet <b>CI/CD</b> requirements by <b>containerizing applications</b> and advocating for the use of <b>IAC </b>(infrastructure as code).
            </Typography>
          </Stack>
          <br></br>
          <Stack spacing={1.5}>
            <Typography fontWeight={"bold"} textAlign={"center"} variant='h6'>
              Relevant Projects
            </Typography>
            <Typography variant='body1' fontWeight={"bold"} textAlign={"center"}>
              Monitoring of Banco de Sabadell's Mobile and Web applications
            </Typography>
            <Typography align='justify'>
              Deploying and maintaining a segment of Banco de Sabadell's Monitoring and Alerting systems using Docker. Developing automated tests, analyzing metrics, and creating real-time dashboards for monitoring. Integrating monitoring systems with the Slack API to promptly notify teams of critical incidents and events.
            </Typography>
            <Typography variant='body1' fontWeight={"bold"} textAlign={"center"}>
              Core Processes Visualization Tool
            </Typography>
            <Typography variant='body1' align='justify'>
              Developed a user-friendly website tool, enhancing tracking and visualization of Banco de Sabadell's core daily processes. Utilized FastAPI (Python 3 framework) for the backend and AngularJS (TypeScript) for the frontend. Achieved scalability through deployment on OpenShift Containers (OCP).
            </Typography>
            <Typography variant='body1' fontWeight={"bold"} textAlign={"center"}>
              Automated Change Scheduler Tool
            </Typography>
            <Typography align='justify'>
              Led the creation of a user-friendly Automated Change Scheduler, facilitating the Automation team's management of cloud and on-premise changes. Developed using FastAPI (Python 3) and React (TypeScript) for frontend. Utilized OpenShift Containers for flexibility. Enhanced reliability with Grafana, Loki, Promtail, and Prometheus monitoring.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

const Experience: React.FC = () => {
  const theme = useTheme();

  return (
    <div id="experience">
      <Box sx={{ backgroundColor: theme.palette.grey[200] }}>
        <Container sx={{ pt: 12 }}>
          <Stack spacing={4} justifyContent="center" alignItems="center" sx={{ maxWidth: "80%", mx: "auto" }}>
            <Typography variant="h4" sx={{ my: 4 }}>
              Experience
            </Typography>
            <KyndrylExperience />
            <MinsaitExperience />
            <EurecatExperience />
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Experience;
