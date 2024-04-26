import { Box, Button, FormControl, FormLabel, Input, Typography, styled } from '@mui/material'
import 'react-international-phone/style.css';
import { Link } from 'react-router-dom';
import metaLogo from "../../assets/MetaLogo.png"
import { useAppDispatch } from '../../store/hook';
import { loginUser } from '../../store/authSlice';

const LandingPage = styled("div")(({theme})=>({
  width: "393px",
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.light,
  textAlign: "center",
  ".logo": {
    width: "154px",
    height: "94px",
    margin: "98px 0px 180px 0px"
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

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.currentTarget); // Get form data from the form element
    const systemuser = formData.get('systemuser') as string; // Use the 'name' attribute of the input to retrieve the value
    const password = formData.get('password') as string;

    dispatch(loginUser({systemuser, password}));
  }

  return (
    <LandingPage>
      <img className="logo" src={metaLogo} alt='meta logo' />
      <Box sx={{p: "30px"}}>
        <form onSubmit={handleSubmit}>
          <div>
            <Typography variant="h1" sx={{textAlign:"center"}}>
              <b>خوش آمدی!</b>
            </Typography>
            <Typography sx={{textAlign:"center"}}>برای ادامه وارد شوید.</Typography>
          </div>
          <Box className="form">
            <FormControl>
              <FormLabel>نام کاربری</FormLabel>
              <Input
                name="systemuser"
                type="text"
                placeholder="users3909809448"
              />
            </FormControl>
            <FormControl>
              <FormLabel>کلمه عبور</FormLabel>
              <Input
                // html input attribute
                name="password"
                type="password"
                placeholder="67463"
              />
            </FormControl>
            <Button sx={{ mt: 5, mb: 2 }} variant='contained' type='submit'>وارد شدن</Button>
          </Box>
        </form>
        <Typography sx={{ alignSelf: 'center', fontSize: 'sm', display: 'flex', alignItems: 'center' }}>
          {"حساب کاربری ندارید? "}
          <Link to="/signup" style={{ marginLeft: 1 }}>ثبت نام</Link>
        </Typography>
      </Box>
    </LandingPage>
  )
}

export default Login