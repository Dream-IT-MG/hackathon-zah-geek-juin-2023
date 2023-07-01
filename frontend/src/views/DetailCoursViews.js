/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Prsoduct Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

                   
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Avatar, Box, Paper, Stack, TextField } from "@mui/material";
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
import {Button} from '@mui/material';

// Overview page components
import Header from "layouts/profile/components/Header";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import DetailFormationHeader from "./DetailFormationHeader";
import DetailFormationDetailModule from "./DetailFormationDetailModule";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { useParams, userParams } from "react-router-dom"
import { ThumbDown } from "@mui/icons-material";

function DetailCoursViews() {
  let { cours_id } = useParams()
  const comments = [
    {
      "content": "Contenu commentaire 1",
      "author": {
        "username": "test",
        "profile_photo": "...."
      }
    },
      {
        "content": "Contenu commentaire 2",
        "author": {
          "username": "test2",
          "profile_photo": "...."
        }
      }
  ]
  let cours = {
    id: cours_id,
    title : `titre du cours ${cours_id}`,
    description : "description",
    durée : "durée",
    thumbnail: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2019/09/Social-Video-Thumbnails-Images.jpg",
  }
  const formation = {
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
      }
    ]
  }

  const module = {
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
  }

  const userIsEnrolled = (userId, formationId) => {
    return true
  }

  const [commentTxt, setCommentTxt] = useState("");
  return (
    <PageLayout>
      <Grid p={5}>
        <DetailFormationHeader nomFormateur={formation.formateur} nomFormation={formation.nomFormation} descriptionFormation={formation.description} payee={userIsEnrolled}/>
        <SoftBox mt={5} mb={3}>
          <Grid container spacing={3}>
              <Grid item xs = {8} md={12} xl={8} borderRadius="lg">
                <div>
                  <video width="100%" height="100%" controls>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
                  </video>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <SoftTypography style={{fontWeight: "bold", textTransform:"capitalize"}}>{cours.title}</SoftTypography>
                    </Grid>
                    <Grid item>

                      <Tooltip title="J'aime">
                        <IconButton>
                          <ThumbUpIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="J'aime pas">
                        <IconButton>
                          <ThumbDownIcon />
                        </IconButton>
                      </Tooltip>

                    </Grid>
                  </Grid>
                  <Grid>
                    <Paper style={{ padding: "40px 20px"}} sx={{m:2}}>
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                          <p style={{ textAlign: "left" }}>
                            { cours.description }
                          </p>
                        </Grid>
                      </Grid>
                    </Paper>               
                    
                  </Grid>
                </div>
                <div>
                {comments.map(comment =>
                  <Card sx={{p:2, m:2}}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar alt="Remy Sharp"/>
                      </Grid>
                      <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{comment.author.username}</h4>
                        <p style={{ textAlign: "left" }}>
                          {comment.content}
                        </p>
                      </Grid>
                    </Grid>
                  </Card>                  
                )}
                </div>
                <Card>
                <Box sx={{ p: "15px" }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Avatar
                      variant="rounded"
                      alt="user-avatar"
                    />
                    <TextField
                      multiline
                      fullWidth
                      minRows={4}
                      id="outlined-multilined"
                      placeholder="Add a comment"
                      value={commentTxt}
                      onChange={(e) => {
                        setCommentTxt(e.target.value);
                      }}
                    />
                    <Button
                      size="large"
                      sx={{
                        bgcolor: "custom.moderateBlue",
                        color: "neutral.white",
                        p: "8px 25px",
                        "&:hover": {
                          bgcolor: "custom.lightGrayishBlue",
                        },
                      }}
                      onClick={(e) => {
                        !commentTxt.trim()
                          ? e.preventDefault()
                          : addComment(commentTxt.trim());
                        setCommentTxt("");
                      }}
                    >
                      Send
                    </Button>
                  </Stack>
                </Box>
              </Card>
              </Grid>
            <Grid item xs={4} md={6} xl={4}>
              <DetailFormationDetailModule module={module} payee={true}/>
            </Grid>
          </Grid>
        </SoftBox>
        <Footer />
      </Grid>
    </PageLayout>
  );
}

export default DetailCoursViews;
