// import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfile } from '../../components/Profil/AccountProfile';
import { Profil } from '../../components/Profil/Profil';
import ProgressBar from '../../components/Profil/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
  
const Progress = () => (
  <>
      <Container maxWidth="lg" >
        <Stack spacing={3}>
          <div style={{height:'145px', overflow: 'auto', overflowX:'hidden' }}>
            <Grid
              container
              spacing={2.5}
            >
             
              <Grid
                lg={15}
                xs={10}
              >
                Formation en Python  
              </Grid>
              <Grid
              
                xs={10} 
              >
              <ProgressBar />  
              </Grid>     
              <Grid
                lg={15}
                xs={10}
              >
                Formation en C++  
              </Grid>
              <Grid
                 
                xs={10} 
              >
              <ProgressBar />  
              </Grid>  
              
            <Grid
                lg={15}
                xs={10}
            >
                Formation en RPG/400 
            </Grid>
            <Grid2
                
                xs={10} 
            >
            <ProgressBar />  
            </Grid2>   
                    
            </Grid>
          </div>
        </Stack>
      </Container>
    
  </>
);


export default Progress;
