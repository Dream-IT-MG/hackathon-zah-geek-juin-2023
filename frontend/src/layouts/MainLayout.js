import { Grid } from "@mui/material";

import SoftBox from "components/SoftBox";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

const MainLayout = ({children}) => {
    return (
        <PageLayout>
            <DefaultNavbar>
            </DefaultNavbar>
            <SoftBox
                pt={5}
            >
                {children}
            </SoftBox>
        </PageLayout>
    )
}

export default MainLayout;