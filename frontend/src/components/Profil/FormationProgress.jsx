// import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfile } from '../../components/Profil/AccountProfile';
import { Profil } from '../../components/Profil/Profil';
import Progress from '../../components/Profil/Progress';
  
const FormationProgress = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2
      }}
    >

      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Formation
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={12}
                
              >
                <Progress/>
              </Grid>  
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
    
  </>
);


export default FormationProgress;
