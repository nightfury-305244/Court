import { Box, Grid, IconButton, styled } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
          <IconButton><img src='/src/assets/majesticons_home.svg' alt='home' /></IconButton>
          {showImage === "#" && <img className="select" src='/src/assets/Rectangle.svg' alt='Rectangle' />}
        </Grid>
        <Grid item>
          <IconButton onClick={handleGames}><img src='/src/assets/tennis-ball_1.svg' alt='tennis-ball' /></IconButton>
          {showImage === "newgame" && <img className="select" src='/src/assets/Rectangle.svg' alt='Rectangle' />}
        </Grid>
        <Grid item>
          <IconButton><img src='/src/assets/basil_add-solid.svg' alt='plus' /></IconButton>
          {showImage === "#" && <img className="select" src='/src/assets/Rectangle.svg' alt='Rectangle' />}
        </Grid>
        <Grid item>
          <IconButton onClick={handleProfile}><img src='/src/assets/majesticons_chat.svg' alt='chat' /></IconButton>
          {showImage === "profile" && <img className="select" src='/src/assets/Rectangle.svg' alt='Rectangle' />}
        </Grid>
        <Grid item>
          <IconButton><img src='/src/assets/solar_chart-bold.svg' alt='chart' /></IconButton>
          {showImage === "#" && <img className="select" src='/src/assets/Rectangle.svg' alt='Rectangle' />}
        </Grid>
      </Grid>
    </StyledFooter>
  )
}

export default Footer