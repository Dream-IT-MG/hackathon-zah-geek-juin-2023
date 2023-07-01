import MainLayout from "layouts/MainLayout";
import { Grid } from "@mui/material";
import { CardModule } from "./CardModule";
import { PrixTotalFormation } from "./PrixTotalFormation";

const TestViews = () => {
    return (
        <MainLayout>
            <Grid container pt={6} spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
              <Grid item xs={8} spacing = {3} sx={{display: "flex", justifyContent : "space-around"}}>
                <CardModule />
                <CardModule />
              </Grid>
              <Grid item xs={4} sx={{display: "flex", justifyContent : "center"}}>
                <PrixTotalFormation style={{flex:"1"}}/>
              </Grid>
            </Grid>
        </MainLayout>
    )
}

export default TestViews;