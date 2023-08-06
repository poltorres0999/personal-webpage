import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material"

const Greet: React.FC = () => {

    const theme = useTheme()

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.grey[100], // Grey background color
                width: '100%', // Full width
                padding: '2rem', // Add padding as needed
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh', // To ensure the content covers the viewport vertically
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
                                <Typography variant="h5" textAlign="center">
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
    )
}

export default Greet;
