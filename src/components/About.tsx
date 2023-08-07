import React from 'react';
import { Box, Chip, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import ChipList from './utils/ChipList';


const About: React.FC = () => {

    const theme = useTheme()

    const skills: string[] = ["Python3", "FastAPI", "MongoDB", "SQL", "TypeScript", "React", "AngularJS", "Docker", "Kubernetes / OCP", "CI/CD", "Grafana", "Jenkins", "Prometheus", "Loki", "Promtail"];

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                width: '100%',
            }}
        >
            <Container sx={{ width: '80%', alignItems: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Stack spacing={1}>
                            <Typography variant='h5' sx={{ whiteSpace: 'pre-line' }}>About me</Typography>
                            <Stack spacing={2}>
                                <Typography textAlign="justify">
                                    Hello! My name is Pol, I'm a passionate Software Developer & DevOps based in Spain. My vision is simple: technology should enhance lives. I  really enjoy coding and I am enthusiast of the DevOps paradigm. Lets build great things togather!
                                </Typography>
                                <Typography textAlign="justify">
                                    Fast learner, proactive and easy-going person by nature.
                                </Typography>
                            </Stack>

                        </Stack>

                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Stack spacing={1}>
                            <Typography variant='h5'>
                                Skills
                            </Typography>
                        </Stack>
                        <ChipList items={skills} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
