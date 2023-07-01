/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { Link } from "react-router-dom";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { backdropClasses , Card, Grid} from "@mui/material";
import logoa from "assets/images/logo.png";
import book from "assets/images/giphy.gif"
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
import { Landing } from "components/Landing/Landing";
import { Home } from "components/Landing/Contents/Home";
function Accueil() {
  return (
    <PageLayout>
        <DefaultNavbar />
        
        <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0, 153, 255, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,147L40,147C80,147,160,147,240,179.7C320,212,400,278,480,269.5C560,261,640,180,720,147C800,114,880,131,960,179.7C1040,229,1120,310,1200,310.3C1280,310,1360,229,1440,171.5C1520,114,1600,82,1680,98C1760,114,1840,180,1920,220.5C2000,261,2080,278,2160,302.2C2240,327,2320,359,2400,334.8C2480,310,2560,229,2640,179.7C2720,131,2800,114,2880,147C2960,180,3040,261,3120,253.2C3200,245,3280,147,3360,89.8C3440,33,3520,16,3600,16.3C3680,16,3760,33,3840,65.3C3920,98,4000,147,4080,138.8C4160,131,4240,65,4320,49C4400,33,4480,65,4560,114.3C4640,163,4720,229,4800,269.5C4880,310,4960,327,5040,285.8C5120,245,5200,147,5280,106.2C5360,65,5440,82,5520,106.2C5600,131,5680,163,5720,179.7L5760,196L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path></svg>        <Grid container spacing = {2}>
        <Grid xs = {6}>
        {/* <img src={logoa} style={{marginTop : "-15%"}}></img> */}
        <Home/>

        </Grid>
        <Grid xs = {6} > 
        <img src={book} style={{marginTop : "-35%" , float : "right", zIndex : "99", marginRight : "10rem"}}></img>
        {/* <Card sx={{ height: "100%" }} style = {{ marginTop : "-20%"}}>
        <SoftBox pt={2} px={2}>
            <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            
            </SoftTypography>
        </SoftBox>
        <SoftBox p={2}>
            <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            
            </SoftBox>
        </SoftBox>
        <SoftBox m = {2}>
            
        </SoftBox>
        </Card> */}
        </Grid>
        </Grid>

    </PageLayout>
  );
}

export default Accueil;
