import { Box, Button, Card, Chip, IconButton, InputBase, Paper, Typography, styled } from '@mui/material'
import plusSVG from "../../assets/+.svg"
import pointSVG from "../../assets/point.svg"
import arrow from "../../assets/fluent_send-32-filled.svg"
import mdi from "../../assets/mdi_like.svg"
import vector from "../../assets/Vector.svg"
import HorizontalScrolling from './HorizontalScrolling'
import plusASVG from '../../assets/Group_62.png'
import avatar4 from '../../assets/Ellipse4.png'
import avatar5 from '../../assets/Ellipse5.png'
import { MatchState } from '../../pages/match/matchSlice'

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
  ".itemView": {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    "img": {
      width: "16px",
      height: "16px",
      marginLeft: "7px"
    }
  },
}))


const data = [
  {
    url: plusASVG,
    name: ""
  },
  {
    url: plusASVG,
    name: ""
  },
  {
    url: avatar5,
    name: "رضا نورانی"
  },
  {
    url: avatar4,
    name: "نیلو"
  },
]

type Props = {
  handleNewMatch: any,
  match: MatchState
}

const MyGameCard = (props: Props) => {

  const {handleNewMatch, match} = props

  return (
    <Content>
        <Box className="content">
          <Typography variant='h1'>
            {match.subject}
          </Typography>
          <Chip sx={{height: "fit-content"}} color='info' label="توسط رضا نورانی و نیلو" />
        </Box>
        <Box sx={{marginTop: "8px"}}>
          <Box className="itemView">
            <Typography>سشنبه 13/09</Typography> <Typography>14:00-13:00</Typography>
            <img src={pointSVG} alt="point"/>
          </Box>
          <Box className="itemView">
            <Typography>قائشمهر،خیابان تهران،تلار 10</Typography>
            <img src={pointSVG} alt="point"/>
          </Box>
          <Box className="itemView">
            <Typography>زمین را رزرو کردم</Typography>
            <img src={pointSVG} alt="point"/>
          </Box>
          <Box className="itemView">
            <Typography>رایگان</Typography>
            <img src={pointSVG} alt="point"/>
          </Box>
        </Box>
        <Box className="itemView" sx={{marginTop: "8px"}}>
          <Typography sx={{
            color: "#FEBE40",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "37.2px",
            marginRight: "5px"
          }}>2/4</Typography>
          <Typography variant='h2'>بازیکن های اضافه شده:</Typography>
        </Box>
        <HorizontalScrolling data={data} />
        <Button variant="contained" fullWidth startIcon={<img src={plusSVG} alt='+'/>} onClick={handleNewMatch} sx={{mt:"8px"}}>
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
          <IconButton color="primary" sx={{ m: '2.5px 8.5px', p: 0 }} aria-label="directions">
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
          <Box sx={{display: 'flex', flexDirection: "row", p: "7px 0", alignItems: "center"}}>
            <img src={mdi} alt='mdi_like'/>
            <Typography>12</Typography>
          </Box>
          <img src={vector} alt='Vector'/>
        </Box>
      </Content>
  )
}

export default MyGameCard