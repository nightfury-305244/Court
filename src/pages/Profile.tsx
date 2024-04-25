import { Box, Button, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import dashboradImg from "../assets/dashboard.png"
import avatar from "../assets/avatar.png"
import avatarback from "../assets/avatar_border.svg"

const StyledProfile = styled("div")(({theme}) => ({
  ".avatar": {
    position: "relative",
    right: "46px",
    top: "-495px",
  },
  ".avatarBorder": {
    position: "relative",
    right: "-91px",
    top: "-490px",
  },
  ".container": {
    backgroundColor: theme.palette.primary.light,
    margin: "12px 19px",
    borderRadius: "8px",
    display: 'flex',
    flexDirection: "column",
    padding: "30px 12.6px 20px 12.6px",
    ".step": {
      fontSize: '16px', 
      color: theme.palette.primary.main
    },
    ".infotxt": {
      fontSize: '16px', 
      color: theme.palette.info.main
    },
    ".ntrp": {
      marginTop: "15px",
      display: "flex",
      "div": {
        margin: "auto",
        ".title": {
          color: theme.palette.info.light,
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "37.2px"
        },
        ".content": {
          color: theme.palette.primary.light,
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "24.8px"
        }
      }
    },
    ".info": {
      display: "flex",
      justifyContent: "end",
      "span": {
        fontWeight: "400",
        color: theme.palette.info.main
      }
    }
  },
}))

type Props = {}

const Profile = (_props: Props) => {

  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/editprofile");
  }

  return (
    <StyledProfile>
      <img src={dashboradImg} alt='dashboard'/>
      <div className='container'>
        <Typography variant='h1' align='center'>احسان نوروزی</Typography>
        <Typography className="step" align='center'>از پرو فایل خودتان را تکمیل کردید</Typography>
        <br />
        <Typography className="infotxt" align='center' sx={{}}>بهترین ها برای ماست!</Typography>
        <Box className="ntrp">
          <div>
            <Typography className='title' align='center'>3.0</Typography>
            <Typography className='content' align='center'>NTRP</Typography>
          </div>
          <hr />
          <div>
            <Typography className='title' align='center'>نفر  34</Typography>
            <Typography className='content' align='center'>دنبال میکند</Typography>
          </div>
          <hr />
          <div>
            <Typography className='title' align='center'>123 نفر</Typography>
            <Typography className='content' align='center'>دنبال کنندگان</Typography>
          </div>
        </Box>
        <Button variant='contained' color='primary' onClick={handleEditProfile}>ویرایش پروفایل</Button>
        <Box className="info">
          <Typography>مازندران، ساری</Typography>
          <Typography>: منطقه</Typography>
        </Box>
        <Box className="info">
          <Typography>حرفه ای</Typography>
          <Typography>: سطــــح</Typography>
        </Box>
        <Box className="info">
          <Typography>راست دست</Typography>
          <Typography>: دســـت</Typography>
        </Box>
        <Box className="info">
          <Typography>185cm</Typography>
          <Typography>: قـــــــــــد</Typography>
        </Box>
      </div>
      <img className='avatarBorder' src={avatarback} alt='avatar_border' />
      <img className='avatar' src={avatar} alt='avatar' />
    </StyledProfile>
  )
}

export default Profile