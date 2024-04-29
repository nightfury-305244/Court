import { Box, Button, CircularProgress, FormControl, FormLabel, Input, Typography, styled } from '@mui/material'
import 'react-international-phone/style.css';
import { Link } from 'react-router-dom';
import metaLogo from "../../assets/MetaLogo.png"
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setRegister, setToken } from '../../store/authSlice';
import axios from 'axios';
import { useState } from 'react';

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
  ".form": {
    display: "flex",
    flexDirection: "column",
    ".MuiFormControl-root":{
      marginTop: "20px"
    }
  }
}))

const Login = () => {

  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(true);

  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.currentTarget); // Get form data from the form element
    const systemuser = formData.get('systemuser') as string; // Use the 'name' attribute of the input to retrieve the value
    const password = formData.get('password') as string;

    try {

      setLoading(false);

      const res = await axios.post('https://api.binj.ir/api/users/auth/login', {systemuser, password});

      setLoading(true);
      setSuccess(true);
      dispatch(setToken(res.data.body))
      dispatch(setRegister({systemuser, password}))

    } catch (error) {
      console.log("error: ", error)
      setLoading(true)
      setSuccess(false);
    }
  }

  const user = useAppSelector(({auth}) => auth)

  return (
    <LandingPage>
      <Box className="logo">
        <img src={metaLogo} alt='meta logo' />
      </Box>
      {isLoading ? (
        <Box sx={{p: "30px"}}>
        <form onSubmit={handleSubmit}>
          <div>
            <Typography variant="h1" sx={{textAlign:"center"}}>
              <b>خوش آمدی!</b>
            </Typography>
            <Typography sx={{textAlign:"center"}}>برای ادامه وارد شوید.</Typography>
            {!isSuccess && <Typography sx={{color: "red", mt: 2}}>فشل تسجيل الدخول. حاول مرة اخرى.</Typography>}
          </div>
          <Box className="form">
            <FormControl>
              <FormLabel>نام کاربری</FormLabel>
              <Input
                name="systemuser"
                type="text"
                placeholder="users3909809448"
                defaultValue={user.username}
              />
            </FormControl>
            <FormControl>
              <FormLabel>کلمه عبور</FormLabel>
              <Input
                // html input attribute
                name="password"
                type="password"
                placeholder="67463"
                defaultValue={user.password}
              />
            </FormControl>
            <Button sx={{ mt: 5, mb: 2 }} variant='contained' type='submit'>وارد شدن</Button>
          </Box>
        </form>
        <Typography sx={{ alignSelf: 'center', fontSize: 'sm', display: 'flex', alignItems: 'center' }}>
          {"حساب کاربری ندارید? "}
          <Link to="/auth/signup" style={{ marginLeft: 1 }}>ثبت نام</Link>
        </Typography>
      </Box>
      ):(
        <CircularProgress size={80}/>
      )}
    </LandingPage>
  )
}

export default Login