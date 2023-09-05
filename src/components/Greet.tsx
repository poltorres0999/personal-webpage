import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material"

const Greet: React.FC = () => {

    const theme = useTheme()

    return (
        <div id="greet">
            <Box
                sx={{
                    backgroundColor: theme.palette.grey[200],
                    width: '100%',
                    pb: '2rem',
                    pt: '2rem',
                    mt: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <Container sx={{ width: '90%' }}>
                    <Grid container spacing={2} alignItems="stretch">
                        <Grid item xs={12} sm={6} md={6}>
                            <Stack spacing={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                                <Stack spacing={2}>
                                    <Typography variant="h5" textAlign="center">
                                        Hello! My name is
                                    </Typography>
                                    <Typography variant="h2" textAlign="center">
                                        Pol Torres Alfonso
                                    </Typography>
                                    <Typography variant="h5" textAlign="center" color={theme.palette.text.secondary}>
                                        I'm a Software Developer & DevOps based in Spain.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src={process.env.PUBLIC_URL + '/me.png'} alt="Local" width="100%" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Greet;
