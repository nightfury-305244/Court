import { Box, Button, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import dashboradImg from "../../assets/dashboard.png"
import avatar from "../../assets/avatar.png"
import avatarback from "../../assets/avatar_border.svg"
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { getProfile } from './userSlice'

const StyledProfile = styled("div")(({theme}) => ({
  ".dashboard": {
    position: "relative"
  },
  ".avatar": {
    position: "absolute",
    top: "125px",
    right: "30px"
  },
  ".avatarBorder": {
    position: "absolute",
    top: "120px",
    right: "30px"
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
    ".vertiHr" :{
      border: "none",
      backgroundColor: "#e0e0e0",
      width: "0.5px",
    },
    ".horiHr": {
      border: "none",
      backgroundColor: "#e0e0e0",
      height: "0.5px",
    },
    ".ntrp": {
      marginTop: "15px",
      display: "flex",
      marginBottom: "9px",
      "div": {
        flexGrow: 1,
        flexBasis: 0,
        ".title": {
          color: theme.palette.info.light,
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "37.2px"
        },
        ".content": {
          color: theme.palette.primary.dark,
        }
      }
    },
    ".info": {
      display: "flex",
      justifyContent: "end",
      color: theme.palette.info.main,
      "span": {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24.8px"
      }
    }
  },
}))

type Props = {}

const Profile = (_props: Props) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/profile/edit");
  }

  const username = useAppSelector(({auth}) => auth.username)
  console.log("username", username)

  useEffect(()=>{
    if(username != undefined) dispatch(getProfile(username))
  },[username])

  const user = useAppSelector(({user}) => user);
  console.log("user: ", user);

  return (
    <StyledProfile>
      <Box className="dashboard">
        <img src={dashboradImg} alt='dashboard'/>
        <img className='avatarBorder' src={avatarback} alt='avatar_border' />
        <img className='avatar' src={avatar} alt='avatar' />
      </Box>
      <div className='container'>
        <Typography variant='h1' align='center'>{user.name}</Typography>
        <Typography className="step" align='center'>از پرو فایل خودتان را تکمیل کردید</Typography>
        <br />
        <Typography className="infotxt" align='center' sx={{}}>بهترین ها برای ماست!</Typography>
        <Box className="ntrp">
          <div>
            <Typography className='title' align='center'>{user.ntrp}</Typography>
            <Typography className='content' variant='h3' align='center'>NTRP</Typography>
          </div>
          <hr className='vertiHr'/>
          <div>
            <Typography className='title' align='center'>نفر  {user.followerCount}</Typography>
            <Typography className='content' variant='h3' align='center'>دنبال میکند</Typography>
          </div>
          <hr className='vertiHr' />
          <div>
            <Typography className='title' align='center'> نفر {user.followingCount}</Typography>
            <Typography className='content' variant='h3' align='center'>دنبال کنندگان</Typography>
          </div>
        </Box>
        <hr className='horiHr'/>
        <Button variant='contained' color='primary' sx={{m: "8px"}} onClick={handleEditProfile}>ویرایش پروفایل</Button>
        <Box className="info">
          <Typography variant='h3'>{user.city}</Typography>
          <Typography>: منطقه</Typography>
        </Box>
        <Box className="info">
          <Typography variant='h3'>{user.bio}</Typography>
          <Typography>: سطــــح</Typography>
        </Box>
        <Box className="info">
          <Typography variant='h3'>{user.handSide} دست</Typography>
          <Typography>: دســـت</Typography>
        </Box>
        <Box className="info">
          <Typography variant='h3'>{user.height}cm</Typography>
          <Typography>: قـــــــــــد</Typography>
        </Box>
      </div>
    </StyledProfile>
  )
}

export default Profile