import { 
  Box, Card, CardContent, 
  Avatar, styled, InputAdornment, TextField, Slider, SliderValueLabelProps, Tooltip, Typography, Button 
} from '@mui/material';
import { useState } from 'react';

const StyledCardContend = styled(CardContent)(({theme})=> ({
  textAlign: 'center', 
  mt: '-30px',
  ".field": {
    "label": {
      right: "-10px",
      top: "12px",
      left: "auto",
      color: theme.palette.secondary.light,
      fontWeight: "400",
      fontSize: "16px",
    },
    ".MuiInputBase-root": {
      padding: '4.8px'
    },
    "input": {
      textAlign: "end",
      color: theme.palette.info.main,
      fontWeight: "600",
      fontSize: "16px",
    }
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

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ borderRadius: '8px', overflow: 'visible', boxShadow: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '-40px' }}>
          <Avatar 
            alt="Profile Picture" 
            src="/src/assets/avatar.png" 
            sx={{ width: "108px", height: "108px" }} 
          />
        </Box>
        <StyledCardContend>
          <TextField
            className='field'
            id="input-with-icon-textfield"
            label="نام"
            fullWidth
            value='احسان'
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
            label="نام خانوادگی:"
            fullWidth
            value='نوروزی'
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
            value="مازندران، ساری"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src='/src/assets/point.svg' />
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
                  <img src='/src/assets/task.svg' />
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
              defaultValue={5.0}
            />
            <Typography ml-2>
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