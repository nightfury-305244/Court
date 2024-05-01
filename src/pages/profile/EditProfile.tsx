import { 
  Box, Card, CardContent, 
  Avatar, styled, InputAdornment, TextField, Slider, Typography, Button 
} from '@mui/material';
import { useEffect, useState } from 'react';
import pointSVG from "../../assets/point.svg"
import taskSVG from "../../assets/task.svg"
import avatar from '../../assets/avatar.png'
import { useAppSelector } from '../../store/hook';
import { UserState } from './userSlice';

const StyledCardContend = styled(CardContent)(({theme})=> ({
  textAlign: 'center', 
  marginTop: "-90px",
  ".field": {
    marginTop: "25px",
    "label": {
      right: "-80px",
      top: "-17px",
      left: "auto",
      color: theme.palette.secondary.light,
      fontWeight: "400",
      fontSize: "16px",
      textAlign: "end",
      width: "100%",
    },
    ".MuiInputBase-root": {
      padding: '0',
      margin : 0,
      ".css-ittuaa-MuiInputAdornment-root": {
        marginBottom: "15px",
      },
      "input": {
        textAlign: "end",
        color: theme.palette.info.main,
        fontWeight: "600",
        fontSize: "16px",
        padding: 0
      }
    },
  },
  ".mSlider": {
    display: 'flex', 
    alignItems: "end",
    ".css-ttgsjq-MuiSlider-track": {
      color: theme.palette.secondary.light
    },
    marginTop: "15px"
  },
  ".btnGroup": {
    textAlign: "end",
    marginTop: "15px",
    'div': {
      display: "flex",
    }
  },
}))

type Props = {}

const EditProfile = (_props: Props) => {
  const [rating, setRating] = useState(5.0);

  const handleSlider = (_event: Event, newValue: number | number[]) => {
    setRating(newValue as number);
  };

  const user: UserState = useAppSelector(({user}) => user);

  useEffect(()=>{
    setRating(user.ntrp);
  },[])
  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ borderRadius: '8px', overflow: 'visible', boxShadow: 3}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '-60px' }}>
          <Avatar 
            alt="Profile Picture" 
            src={avatar} 
            sx={{ width: "108px", height: "108px" }} 
          />
        </Box>
        <StyledCardContend>
          <TextField
            className='field'
            id="input-with-icon-textfield"
            label="نام"
            fullWidth
            defaultValue={user.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className='field'
            id="input-with-icon-textfield"
            label="نام خانوادگی"
            fullWidth
            defaultValue={user.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className='field'
            id="input-with-icon-textfield"
            label="محل سکونت"
            fullWidth
            defaultValue={user.city}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={pointSVG} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className='field'
            id="input-with-icon-textfield"
            label="سن"
            fullWidth
            value='76/10/02'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={taskSVG} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Box className="mSlider" >
            <Slider
              valueLabelDisplay="auto"
              onChange={handleSlider}
              aria-label="custom thumb label"
              max={6.0}
              defaultValue={user.ntrp}
            />
            <Typography ml={2}>
            سطح
            <br/>
            {rating}
            </Typography>
          </Box>
          <Typography sx={{color: "#606060", fontSize: "14px", lineHeight: "21.7px", textAlign: "right"}}>
          پیش بینی ضربات خوبی دارم، از پس ضربات قدرتمند بر میایم ،تمام زمین را به خوبی پوشش میدهم و ثدرت ضربه زنی و دقت سرویس زنی خوبی دارم.
          </Typography>
          <Box className="btnGroup">
            <Typography sx={{color: "#828282"}}>انتخاب دست</Typography>
            <Box>
              <Button variant="outlined" color='warning' sx={{marginRight: "20px", color: "#A4A2A4"}} fullWidth>چپ دست</Button>
              <Button variant='contained' fullWidth>راست دست</Button>
            </Box>
          </Box>
          <Box className="btnGroup">
            <Typography sx={{color: "#828282"}}>درباره من</Typography>
            <TextField fullWidth multiline rows={2} />
          </Box>
        </StyledCardContend>
      </Card>
    </Box>
  )
}

export default EditProfile