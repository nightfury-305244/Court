import { Grid, IconButton, styled } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        height: "11px"
      }
    }
  }
}));


const Footer = () => {

  const navigate = useNavigate();
  const [showImage, setShowImage] = useState("");

  const handleProfile = () => {
    navigate("/profile")
    setShowImage("profile")
  }

  const handleGames = () => {
    navigate("/addnewgame")
    setShowImage("newgame")
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
          {showImage === "#" && <img className="select" src={Rectangle} alt='Rectangle' />}
        </Grid>
        <Grid item>
          <IconButton onClick={handleGames}><img src={tennisBell} alt='tennis-ball' /></IconButton>
          {showImage === "newgame" && <img className="select" src={Rectangle} alt='Rectangle' />}
        </Grid>
        <Grid item>
          <IconButton><img src={baseAdd} alt='plus' /></IconButton>
          {showImage === "#" && <img className="select" src={Rectangle} alt='Rectangle' />}
        </Grid>
        <Grid item>
          <IconButton onClick={handleProfile}><img src={chat} alt='chat' /></IconButton>
          {showImage === "profile" && <img className="select" src={Rectangle} alt='Rectangle' />}
        </Grid>
        <Grid item>
          <IconButton><img src={solarChart} alt='chart' /></IconButton>
          {showImage === "#" && <img className="select" src={Rectangle} alt='Rectangle' />}
        </Grid>
      </Grid>
    </StyledFooter>
  )
}

export default Footer