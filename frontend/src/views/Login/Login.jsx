import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Grid } from "@mui/material";
import { DefaultNavbar } from "components/DefaultNavbar";
import { PageLayout } from "components/PageLayout";
import Progress from "components/Profil/Progress";
import ProgressBar from "components/Profil/ProgressBar";
import SoftBox from "components/SoftBox";
import SoftBoxRoot from "components/SoftBox/SoftBoxRoot";
import { CardModule } from "components/formation/CardModule";
import { PrixTotalFormation } from "components/formation/PrixTotalFormation";
import React from "react";
import Footer from 'components/Footer/Footer';
import Logins from 'components/Logins/Logins';

export const Login = () => {
    return(
        <>
            <DefaultNavbar/>
            <Logins/>
    
        </>
    )
}

