import { Card, Space } from 'antd';
import React from 'react';
import { Grid } from "@mui/material"
import Categories from "./Categories"
import { Container } from "@mui/system"
import { Uploader } from "./Uploader"

   
export const MentorDash =() => {
    return (
    <>
    <Container maxWidth="lg"   >
        <Grid 
         style={{marginTop:100}}
        xs={12}
        lg={12}
        >
        
        <Card/>
        </Grid>
        
    </Container>
    </>
    )
}




