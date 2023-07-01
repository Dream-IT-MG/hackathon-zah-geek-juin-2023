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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";

function DetailFormationDetailModule({formation_id, module, payee }) {
    if (!payee) {
        payee = false;
    }
  const renderCours = module.cours.map(cours => (
    <SoftBox key={cours.id} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <SoftBox mr={2}>
        <SoftAvatar src={cours.thumbnail} alt="something here" variant="rounded" shadow="md" />
      </SoftBox>
      <SoftBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <SoftTypography variant="button" fontWeight="medium">
          <Link to={`/formation/${formation_id}/modules/${module.id}/cours/${cours.id}`}>{cours.title}</Link>
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
          {cours.description}
        </SoftTypography>
      </SoftBox>
      <SoftBox ml="auto">
        <SoftTypography style = {{fontSize : "small", fontWeight : "bold"}}>3:50</SoftTypography>
      </SoftBox>
    </SoftBox>
  ));

  return (
    <div style={{position: "relative"}}>
        { payee ? "" : <SoftBox color="white" borderRadius="md" shadow="lg" p={1} bgColor="warning" style={{fontWeight:"bold", fontSize : "medium",position: "absolute" , top: "-1rem", right:0, zIndex : "99"}}>{module.price}</SoftBox>}
        <Card sx={{ height: "100%" }}>
        <SoftBox pt={2} px={2}>
            <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {module.title}
            </SoftTypography>
        </SoftBox>
        <SoftBox p={2}>
            <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            {renderCours}
            </SoftBox>
        </SoftBox>
        <SoftBox m = {2}>
            { payee ? "" : <SoftButton  xs={3} variant="contained" color = "info">Acheter Module</SoftButton> }
        </SoftBox>
        </Card>
    </div>
  );
}

export default DetailFormationDetailModule;
