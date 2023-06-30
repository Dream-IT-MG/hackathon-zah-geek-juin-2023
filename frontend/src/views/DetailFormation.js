// import { Grid, Icon } from '@mui/material/Icon';
import React from 'react';
import './../css/card_detail.css';
import { makeStyles } from "@material-ui/core/styles"
import { CardModule } from '../components/formation/CardModule';
import { PrixTotalFormation } from '../components/formation/PrixTotalFormation';
import { DefaultNavbar } from "../components/DefaultNavbar";
import { PageLayout } from "../components/PageLayout";

  const listModule = {
    backgroundColor : "black",
    textAlign : "center",
    height : "105vh",
    overflow : "auto"
  }

export const DetailFormation = ({ profil, index, cover }) => {
    return (
        <PageLayout background="white">
            <DefaultNavbar
            action={{
            type: "external",
            route: "https://appseed.us/product/node-js-react-soft-dashboard",
            label: "free download",
            color: "dark",
            }}
            />
            {/* // <Grid container spacing={3} style = {listModule}>
            // <Grid item xs={8} >
            //     <div style = {{ display : "flex" , alignItems : "center"}}>
            //         <CardModule />
            //         <CardModule />
            //     </div>
            // </Grid>
            // <Grid item xs={4}>
            //     <PrixTotalFormation/>
            // </Grid>
            // </Grid> */}
        </PageLayout>
    )
  }