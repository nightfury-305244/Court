import { Box, Button, CircularProgress, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import PinInput from 'react-pin-input';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setRegister, setToken } from '../../store/authSlice';

const LandingPage = styled("div")(({theme})=>({
  width: "393px",
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.light,
  textAlign: "center",
  ".logo": {
    textAlign: "center",
    "img": {
      width: "154px",
      height: "94px",
    },
    padding: "98px 0px 180px 0px"
  },
  ".phoneNumber": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "30px",
    ".react-international-phone-input-container": {
      display: "flex",
      ".react-international-phone-country-selector": {
        flexBasic: 0,
        ".react-international-phone-country-selector-button": {
          borderColor: theme.palette.warning.main
        }
      },
      ".react-international-phone-input": {
        flexGrow: 1,
        borderColor: theme.palette.warning.main,
        textAlign: "start"
      }
    }
  },
  ".pinCode": {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    ".pincode-input-container": {
      textAlign: "center",
      ".pincode-input-text": {
        borderTop: "none!important",
        borderLeft: "none!important",
        borderRight: "none!important",
        margin:"0 6px!important"
      }
    }
  }
}))


const SignUp = () => {
  const [isSuccess, setSuccess] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isNumber, setNumber] = useState(true);
  const [phone, setPhone] = useState("");
  const [_pin, setPin] = useState("");
  const dispatch = useAppDispatch();
  
  const auth = useAppSelector(({auth})=>auth);

  const HandleSendCode = async () => {
    setSuccess(true)
    setLoading(true)
    try {
      const res = await axios.get(`https://api.binj.ir/api/users/auth/smsverification?phone=${phone.replace("+","")}`)
      dispatch(setRegister(res.data.body));
      setNumber(false);
    } catch (error) {
      console.log("error: ", error)
      setSuccess(false);
    }
    setLoading(false)
  }
  const handleComplete = async () => {
    setSuccess(true)
    setLoading(true)
    try {
      const res = await axios.post("https://api.binj.ir/api/users/auth/login", {"systemuser": auth.username, "password": auth.password})
      dispatch(setToken(res.data.body))
    } catch (error) {
      console.log("error: ", error)
      setSuccess(false);
    }
    setLoading(false)
  }
  const handleAuth = () => {
    setNumber(true);
  }

  return (
    <LandingPage>
      <Box className="logo">
        <img src="/images/MetaLogo.png" alt='meta logo' />
      </Box>
      {!isLoading ? (
        isNumber ? (
          <div className='phoneNumber'>
            {!isSuccess && <Typography sx={{color: "red", mt: 2}}>فشل تسجيل الدخول. حاول مرة اخرى.</Typography>}
            <Typography sx={{mb: "5px"}}>شماره موبایل</Typography>
            <PhoneInput
              defaultCountry="ir"
              onChange={(ph) => setPhone(ph)}
            />
            <Typography sx={{textAlign: "center", mt:"19px", color: "#606060"}}>کد تایید به این شماره پیامک میشود.</Typography>
            <Button variant='contained' sx={{mt: "20px"}} onClick={HandleSendCode}>ارسال کد</Button>
          </div>
        ) : (
          <div className='pinCode'>
            {!isSuccess && <Typography sx={{color: "red", mt: 2}}>فشل تسجيل الدخول. حاول مرة اخرى.</Typography>}
            <PinInput
              length={4}
              onChange={(pin)=>setPin(pin)}
              onComplete={handleComplete}
            />
            <Typography sx={{textAlign: "center", mt:"19px", color: "#606060" }}>کد تایید ارسال شده را وارد کنید لطفا</Typography>
  
            <Button variant='contained' sx={{mt: "20px"}} onClick={handleAuth}>أعد الإرسال</Button>
          </div>
        )
      ):(
        <CircularProgress size={80}/>
      )}
    </LandingPage>
  )
}

export default SignUp