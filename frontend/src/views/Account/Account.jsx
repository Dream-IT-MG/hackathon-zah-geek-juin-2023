// import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfile } from '../../components/Profil/AccountProfile';
import { Profil } from '../../components/Profil/Profil';
import ProgressBar from '../../components/Profil/ProgressBar';
import FormationProgress from '../../components/Profil/FormationProgress';
import { DefaultNavbar } from 'components/DefaultNavbar';
import SoftBox from 'components/SoftBox';
import {PageLayout}   from 'components/PageLayout';
  
const Account = () => (
  <>

          <PageLayout background="">
            <DefaultNavbar/>
          <SoftBox
            width="calc(100% - 2rem)"
            minHeight="50vh"
            borderRadius="lg"
            mx={2}
            my={2}
            pt={6}
            pb={6}
          >
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 8
              }}
            >
              <Container maxWidth="lg" >
                <Stack spacing={3} >
                  <div>
                    <Typography variant="h4">
                      Account
                    </Typography>
                  </div>
                  <div>
                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid
                        xs={6}
                        md={6}
                        lg={4}
                      >
                        <AccountProfile />
                      </Grid>
                      <Grid
                        lg={8}  
                        xs={6}
            
                      >
                        <FormationProgress/>
                      </Grid>  
                      <Grid
                        lg={12}               
                      >
                        <Profil />
                      </Grid>  
                    </Grid>
                  </div>
                </Stack>
              </Container>
            </Box>
            
          </SoftBox>  
        </PageLayout>
  </>
);


export default Account;
