import { Box, Button, Card, Chip, IconButton, InputBase, Paper, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import plusSVG from "../assets/+.svg"
import pointSVG from "../assets/point.svg"
import Group from "../assets/Group_62.png"
import avatar4 from "../assets/Ellipse4.png"
import avatar5 from "../assets/Ellipse5.png"
import arrow from "../assets/fluent_send-32-filled.svg"
import mdi from "../assets/mdi_like.svg"
import vector from "../assets/Vector.svg"

const Content = styled(Card)(()=>({
  borderRadius: "8px",
  boxShadow: "0px 1px 30px 0px #0000001A",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  padding: "7px 8px 7px 8px",
  marginTop: "15.5px",
  ".content": {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    ".MuiChip-label": {
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "18.6px"
    }
  },
  ".item": {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    "img": {
      width: "16px",
      height: "16px",
      marginLeft: "7px"
    }
  },
  ".carousel": {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    ".item": {
      width: "65px",
      display: "flex",
      flexDirection: "column",
      "img": {
        width: "46px",
        height: "46px",
      }
    }
  }
}))

const GameTabStyle = styled(Box)(({theme})=> ({
  color: theme.palette.info.light,
  display: "flex",
  flexDirection: "row",
  p: {
    flexGrow: 1,
    textAlign: "center",
    borderBottom: "1px solid"
  },
  ".first": {
    marginRight: "8px",
  },
  ".second": {
    color: theme.palette.primary.main,
    marginLeft: "8px"
  }
}))

type Props = {}

const MyGame = (_props: Props) => {

  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/addnewgame");
  }

  const handleNewMatch = () => {
    navigate("/editornewmatch")
  }

  return (
    <Box sx={{p: "10px 39px"}}>
      <Box>
        <GameTabStyle>
          <Typography className='first'>یافتن بازی</Typography>
          <Typography className='second'>بازی های من</Typography>
        </GameTabStyle>
        <Button 
          fullWidth 
          variant='contained' 
          color='warning'
          onClick={handleNewGame}
          startIcon={<img src={plusSVG} alt='+'/>}
          sx={{marginTop: "12px"}}>
            افزودن بازی جدید 
          </Button>
      </Box>
      <Content>
        <Box className="content">
          <Typography variant='h1'>
            زمین بازی ویلا پارک
          </Typography>
          <Chip color='success' label="توسط رضا نورانی و نیلو" />
        </Box>
        <Box sx={{marginTop: "8px"}}>
          <Box className="item">
            <Typography>14:00-13:00 سشنبه 13/09</Typography>
            <img src={pointSVG} alt="point"/>
          </Box>
          <Box className="item">
            <Typography>قائشمهر،خیابان تهران،تلار 10</Typography>
            <img src={pointSVG} alt="point"/>
          </Box>
          <Box className="item">
            <Typography>زمین را رزرو کردم</Typography>
            <img src={pointSVG} alt="point"/>
          </Box>
          <Box className="item">
            <Typography>رایگان</Typography>
            <img src={pointSVG} alt="point"/>
          </Box>
        </Box>
        <Box className="item" sx={{marginTop: "8px"}}>
          <Typography sx={{
            color: "#FEBE40",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "37.2px",
            marginRight: "5px"
          }}>2/4</Typography>
          <Typography>بازیکن های اضافه شده:</Typography>
        </Box>
        <Box className="carousel">
          <Box className="item">
            <IconButton><img src={Group} alt="add" /></IconButton>
          </Box>
          <Box className="item">
            <IconButton><img src={Group} alt="add" /></IconButton>
          </Box>
          <Box className="item">
            <IconButton><img src={avatar5} alt="add" /></IconButton>
            <Typography>رضا نورانی</Typography>
          </Box>
          <Box className="item">
            <IconButton><img src={avatar4} alt="add" /></IconButton>
            <Typography>نیلو</Typography>
          </Box>
        </Box>
        <Button variant="contained" fullWidth startIcon={<img src={plusSVG} alt='+'/>} onClick={handleNewMatch}>
           دنبال کردن    
        </Button>
        <Paper
          component="form"
          sx={{ p: '2px 4px', mt:"8px", display: 'flex', alignItems: 'center', width: "100%", boxShadow: "none", backgroundColor: '#F2F2F2'}}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize: "12px", fontWeight: "400", lineHeight: "18.6px" }}
            placeholder="نظر خود را بنویسید"
            inputProps={{ 'aria-label': 'نظر خود را بنویسید' }}
          />
          <IconButton color="primary" sx={{ p: '2.5px 8.5px' }} aria-label="directions">
            <img src={arrow} alt='send'/>
          </IconButton>
        </Paper>
        <Box sx={{
          display: 'flex',
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          mt: "8px"
        }}>
          <Box sx={{display: 'flex', flexDirection: "row", p: "7px 0"}}>
            <img src={mdi} alt='mdi_like'/>
            <Typography>12</Typography>
          </Box>
          <img src={vector} alt='Vector'/>
        </Box>
      </Content>
    </Box>
  )
}

export default MyGame