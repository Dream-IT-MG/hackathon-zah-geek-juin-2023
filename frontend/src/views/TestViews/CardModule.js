import { Badge, Chip, Checkbox} from '@mui/material';
import React from 'react';
import 'css/card_detail.css';


  const mystyle = {
    color: "white",
    position : "absolute",
    bottom : "0",
    right : "0",
    backgroundColor: "DodgerBlue",
    Bottom: "0px",
    margin : "5px"
  };
  const check = {
    position : "absolute",
    top : "0",
    right : "0",
    zIndex : "99",
    color : "white"
  }

export const CardModule = ({ profil, index, cover }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <div className="k">
        <div className="content">
        <div  style={{position : "relative"}}>

            <Checkbox style = {check}/>
            <div className="card">
                <div className="temporary_text">
                    Place image here
                </div>
                <div className="card_content">
                    <span className="card_title">Les Fonctions</span>
                        <span className="card_subtitle">Apprenez les fonctions en python.</span>
                        <p className="card_description">
                            <ul>
                                <li>
                                    5 vidéos
                                </li>
                                <li>
                                    comment définir une fonction
                                </li>
                                <li>
                                    comment appeler une fonction
                                </li>
                            </ul>
                        </p>
                </div>

            </div>
            <Chip label="primary" color="primary" style = {mystyle}/>
        </div>
        </div>

    </div>
    );
  }