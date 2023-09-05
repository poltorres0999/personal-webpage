import React from 'react';
import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import ChipList from './utils/ChipList';


const About: React.FC = () => {

    const theme = useTheme()

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
        <div id="about">
            <Box

                sx={{
                    my: 12,
                    backgroundColor: theme.palette.background.default,
                    width: '100%',
                }}
            >
                <Container sx={{ width: '80%', alignItems: "center" }}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Stack spacing={1}>
                                <Typography variant='h4' sx={{ whiteSpace: 'pre-line' }}>About me</Typography>
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
                            <Stack spacing={1} alignItems={"left"}>
                                <Typography variant='h4'>
                                    Skills
                                </Typography>
                                <Typography variant='body1'>
                                    Here are a few technologies I've been working with:
                                </Typography>

                            </Stack>
                            <ChipList items={skills} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default About;
