import { Grid, IconButton, styled } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import home from "../../assets/majesticons_home.svg"
import chat from "../../assets/majesticons_chat.svg"
import baseAdd from "../../assets/basil_add-solid.svg"
import tennisBell from "../../assets/tennis-ball_1.svg"
import solarChart from "../../assets/solar_chart-bold.svg"
import Rectangle from "../../assets/Rectangle.svg"

const StyledFooter = styled("div")(({theme}) => ({
  padding: "2px 19px 22px 19px",
  ".MuiGrid-container": {
    width: '355px',
    height: "49px",
    backgroundColor: theme.palette.primary.light,
    borderRadius: '24px',
    padding: "8.5px 20px",
    ".MuiGrid-item": {
      display: "flex",
      flexDirection: "column",
      "button": {
        padding: 0,
      },
      ".select": {
        height: "11px",
        opacity: 0
      }
    }
  }
}));


const Footer = () => {

  const location = useLocation().pathname.split('/')[1];

  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile")
  }

  const handleGames = () => {
    navigate("/games")
  }

  return (
    <StyledFooter>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <IconButton><img src={home} alt='home' /></IconButton>
          <img className="select" style={{ opacity: location === "#" ? 1 : 0 }}  src={Rectangle} alt='Rectangle' />
        </Grid>
        <Grid item>
          <IconButton onClick={handleGames}><img src={tennisBell} alt='tennis-ball' /></IconButton>
          <img className="select" style={{ opacity: location === "games" ? 1 : 0 }} src={Rectangle} alt='Rectangle' />
        </Grid>
        <Grid item>
          <IconButton><img src={baseAdd} alt='plus' /></IconButton>
          <img className="select" style={{ opacity: location === "#" ? 1 : 0 }} src={Rectangle} alt='Rectangle' />
        </Grid>
        <Grid item>
          <IconButton onClick={handleProfile}><img src={chat} alt='chat' /></IconButton>
          <img className="select" style={{ opacity: location === "profile" ? 1 : 0 }} src={Rectangle} alt='Rectangle' />
        </Grid>
        <Grid item>
          <IconButton><img src={solarChart} alt='chart' /></IconButton>
          <img className="select" style={{ opacity: location === "#" ? 1 : 0 }} src={Rectangle} alt='Rectangle' />
        </Grid>
      </Grid>
    </StyledFooter>
  )
}

export default Footer