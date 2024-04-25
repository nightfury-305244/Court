import { Button, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import PinInput from 'react-pin-input';
import { useNavigate } from 'react-router-dom';
import metaLogo from "../assets/MetaLogo.png"

const LandingPage = styled("div")(({theme})=>({
  width: "393px",
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.light,
  textAlign: "center",
  ".logo": {
    width: "154px",
    height: "94px",
    margin: "98px 0px 234px 0px"
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
  const navigate = useNavigate();
  const [isNumber, setNumber] = useState(true);
  const [phone, setPhone] = useState("");
  const [_pin, setPin] = useState("");

  const HandleSendCode = () => {
    setNumber(false);
  }
  const handleComplete = (value:any) => {
    // Handle the completed PIN input
    setPin(value);
  };
  const handleAuth = () => {
    navigate("/profile")
  }

  return (
    <LandingPage>
      <img className="logo" src={metaLogo} alt='meta logo' />
      {isNumber ? (
        <div className='phoneNumber'>
          <Typography sx={{mb: "5px"}}>شماره موبایل</Typography>
          <PhoneInput
            defaultCountry="ua"
            value={phone}
            onChange={(ph) => setPhone(ph)}
          />
          <Typography sx={{textAlign: "center", mt:"19px", color: "#606060"}}>کد تایید به این شماره پیامک میشود.</Typography>
          <Button variant='contained' sx={{mt: "20px"}} onClick={HandleSendCode}>ارسال کد</Button>
        </div>
        
      ) : (
        <div className='pinCode'>
          <PinInput
            length={4}
            onComplete={handleComplete}
          />
          <Typography sx={{textAlign: "center", mt:"19px", color: "#606060" }}>کد تایید ارسال شده را وارد کنید لطفا</Typography>

          <Button variant='contained' sx={{mt: "20px"}} onClick={handleAuth}>ارسال کد</Button>
        </div>
      )}
    </LandingPage>
  )
}

export default SignUp