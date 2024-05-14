import { 
  Box, Card, CardContent, 
  Avatar, styled, InputAdornment, TextField, Slider, Typography, 
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Snackbar,
  Alert} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { UserState, updateUser } from './userSlice';
import { DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';

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
  ".agePicker": {
    width: "100%",
    "label": {
      left: "65px",
      color: theme.palette.secondary.light,
      fontWeight: "400",
      fontSize: "16px",
      textAlign: "end",
      width: "100%",
    },
    ".MuiInputBase-adornedEnd":{
      padding: "0px 0px 0px 12px",
      ".MuiInputBase-inputAdornedEnd": {
        padding: "16px 0 0 0",
        color: "#606060",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24.8px"
      },
      ".MuiInputAdornment-sizeMedium":{
        width: "fit-content",
        "*": {padding:0}
      },
      "fieldset": {
        border: "none",
        borderBottom: "1px solid",
        borderRadius: "0px",
      }
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
  ".hand": {
    marginTop: "10px",
    div: {
      display: "flex",
      justifyContent: "space-around"
    }
  }
}))

type Props = {}

const EditProfile = (_props: Props) => {
  const user: UserState = useAppSelector(({user}) => user);
  const auth = useAppSelector(({auth})=>auth)
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState(user.ntrp as number);
  const [age, setAge] = React.useState<Dayjs|null>(dayjs(user.birth));
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [fetchStatus, setFetch] = React.useState<{
    message: string
    severity: "success" | "error"
  }>({
    message: "You Profile is updates successfully!",
    severity: "success"
  })

  useEffect(()=>{
    const updateUserName = async () => {
      setLoading(true)
      try {
        await axios.put("https://api.binj.ir/api/username",
          {
            "username": auth.username
          },
          {
            headers: {
              Authorization: `${auth.token}`,
            }
          }
        )
      } catch (error) {
        console.log();
      }
      
      setLoading(false)
    }

    updateUserName();
  },[]);

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSlider = (_event: Event, newValue: number | number[]) => {
    setRating(newValue as number);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      lastname: formData.get("lastname"),
      city: formData.get("address"),
      ntrp: Number(formData.get('ntrp')),
      age: age?.format('DD/MM/YYYY'),
      height: Number(formData.get("height")),
      handSide: formData.get("handSide"),
      about: formData.get("about")
    }
    console.log(data);
    setLoading(true)
    try {
      await axios.put("https://api.binj.ir/api/update", data, 
        {
          headers: {
            Authorization: `${auth.token}`,
          }
        }
      );
      dispatch(updateUser(data))
      
      setOpen(true);
      setFetch({
        message: "You Profile is updates successfully!",
        severity: "success"
      })
      
    } catch (error) {
      setOpen(true);
      setFetch({
        message: "Update failed! Please try again later.",
        severity: "error"
      })
    }
    setLoading(false)
  }

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ borderRadius: '8px', overflow: 'visible', boxShadow: 3}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '-60px' }}>
          <Avatar 
            alt="Profile Picture" 
            src="/images/avatar.png"
            sx={{ width: "108px", height: "108px" }} 
          />
        </Box>
        <StyledCardContend>
          <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
              className='field'
              id="name-textfield"
              name="name"
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
              id="lastname-textfield"
              label="نام خانوادگی"
              name='lastname'
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
              id="address-textfield"
              label="محل سکونت"
              fullWidth
              name='address'
              defaultValue={user.city}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="/images/point.svg" />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  className='agePicker'
                  label="سن"
                  slots={{ openPickerIcon: ()=>(<img src="/images/task.svg" />) }}
                  slotProps={{
                    inputAdornment: {
                      position: 'start'
                    }
                  }}
                  value={age}
                  onChange={(newValue) => setAge(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              className='field'
              id="height-textfield"
              label="ارتفاع"
              name='height'
              type='number'
              fullWidth
              defaultValue={user.height}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <Box className="mSlider" >
              <Slider
                valueLabelDisplay="auto"
                onChange={handleSlider}
                name='ntrp'
                aria-label="custom thumb label"
                max={6}
                value={rating}
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
            <FormControl fullWidth className='hand'>
              <FormLabel id="demo-row-radio-buttons-group-label">انتخاب دست</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="handSide"
                defaultValue={user.handSide}
              >
                <FormControlLabel value="left" control={<Radio />} label="چپ دست" />
                <FormControlLabel value="right" control={<Radio />} label="راست دست" />
              </RadioGroup>
            </FormControl>
            <Box className="btnGroup">
              <Typography sx={{color: "#828282"}}>درباره من</Typography>
              <TextField fullWidth multiline rows={3} name='about' sx={{
                ".MuiInputBase-root": {
                  padding: "5px"
                }
              }}/>
            </Box>
            <LoadingButton 
              fullWidth sx={{mt: "10px"}} 
              variant='contained' 
              loading={loading}
              type='submit'>
                ارسال
              </LoadingButton>
          </Box>
        </StyledCardContend>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert
          onClose={handleClose}
          severity={fetchStatus.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {fetchStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default EditProfile