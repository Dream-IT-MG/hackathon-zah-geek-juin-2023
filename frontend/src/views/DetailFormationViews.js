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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import DetailFormationHeader from "./DetailFormationHeader";
import DetailFormationDetailModule from "./DetailFormationDetailModule";
// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function DetailFormationViews() {
  const formation = {
    id:1,
    nomFormation : "Nom de la formation",
    formateur: "Nom du formateur",
    description: "Description du formation en détails ici pour suci....",
    modules: [
      {
        id: 1,
        title: "Titre du module",
        price: "2000,00",
        cours : [
          {
            id: 1,
            title : "titre du cours",
            description : "description",
            durée : "durée",
            thumbnail: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2019/09/Social-Video-Thumbnails-Images.jpg",
          },
          {
            id: 2,
            title : "titre du cours 2",
            description : "description 2",
            durée : "durée 2",
            thumbnail: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2019/09/Social-Video-Thumbnails-Images.jpg"
          }
        ]
      },
      {
        id: 2,
        title: "Titre du module 2",
        price: "5000,00",
        cours : [
          {
            id: 1,
            title : "titre du cours",
            description : "description",
            durée : "durée",
            thumbnail: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2019/09/Social-Video-Thumbnails-Images.jpg",
          },
          {
            id: 2,
            title : "titre du cours 2",
            description : "description 2",
            durée : "durée 2",
            thumbnail: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2019/09/Social-Video-Thumbnails-Images.jpg",
          }
        ]
      },
    ]
  }
  return (
    <PageLayout>
      <Grid p={5}>
        <DetailFormationHeader nomFormateur={formation.formateur} nomFormation={formation.nomFormation} descriptionFormation={formation.description} />
        <SoftBox mt={5} mb={3}>
          <Grid container spacing={3}>
            {formation.modules.map(module => (
              <Grid item xs={12} xl={4}>
                <DetailFormationDetailModule formation_id={formation.id} module={module} />
              </Grid>
            ))}
          </Grid>
        </SoftBox>
        <Footer />
      </Grid>
    </PageLayout>
  );
}

export default DetailFormationViews;
