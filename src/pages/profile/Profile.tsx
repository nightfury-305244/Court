import { Box, Button, Skeleton, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import dashboradImg from "../../assets/dashboard.png"
import avatar from "../../assets/avatar.png"
import avatarback from "../../assets/avatar_border.svg"
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { getId, getProfile } from './userSlice'

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
  
  const auth = useAppSelector(({auth}) => auth)

  useEffect(() => {
    const fetchData = async () => {
      if(auth.id === "new_member")
        navigate("/profile/edit");
      if(auth.id){
        await dispatch(getProfile());
        console.log("getProfile", auth.id)
      }else if(auth.username){
        await dispatch(getId(auth.username));
        console.log("getId",auth.id)
      }
    };

    fetchData();
  },[auth])

  const user = useAppSelector(({user}) => user);

  return (
    <StyledProfile>
      <Box className="dashboard">
        <img src={dashboradImg} alt='dashboard'/>
        <img className='avatarBorder' src={avatarback} alt='avatar_border' />
        <img className='avatar' src={avatar} alt='avatar' />
      </Box>
      <div className='container'>
        <Typography variant='h1' align='center'>{user.name? user.name : <Skeleton animation="wave" />}</Typography>
        <Typography className="step" align='center'>از پرو فایل خودتان را تکمیل کردید</Typography>
        <br />
        <Typography className="infotxt" align='center' sx={{}}>بهترین ها برای ماست!</Typography>
        <Box className="ntrp">
          <div>
            <Typography className='title' align='center'>{user.ntrp? user.ntrp: <Skeleton animation="wave" />}</Typography>
            <Typography className='content' variant='h3' align='center'>NTRP</Typography>
          </div>
          <hr className='vertiHr'/>
          <div>
            <Typography className='title' align='center'>{user.name?`نفر ${user.followerCount}`:<Skeleton animation="wave" />}</Typography>
            <Typography className='content' variant='h3' align='center'>دنبال میکند</Typography>
          </div>
          <hr className='vertiHr' />
          <div>
            <Typography className='title' align='center'>{user.name?`نفر ${user.followingCount}`:<Skeleton animation="wave" />}</Typography>
            <Typography className='content' variant='h3' align='center'>دنبال کنندگان</Typography>
          </div>
        </Box>
        <hr className='horiHr'/>
        <Button variant='contained' color='primary' sx={{m: "8px"}} onClick={handleEditProfile}>ویرایش پروفایل</Button>
        <Box className="info">
          <Typography variant='h3'>{user.city?user.city:<Skeleton sx={{minWidth:"50px"}} animation="wave" />}</Typography>
          <Typography>: منطقه</Typography>
        </Box>
        <Box className="info">
          <Typography variant='h3'>{user.bio?user.bio:<Skeleton sx={{minWidth:"50px"}} animation="wave" />}</Typography>
          <Typography>: سطــــح</Typography>
        </Box>
        <Box className="info">
          <Typography variant='h3'>{user.handSide?`${user.handSide}دست`:<Skeleton sx={{minWidth:"50px"}} animation="wave" />}</Typography>
          <Typography>: دســـت</Typography>
        </Box>
        <Box className="info">
          <Typography variant='h3'>{user.name?`${user.height}cm`:<Skeleton sx={{minWidth:"50px"}} animation="wave" />}</Typography>
          <Typography>: قـــــــــــد</Typography>
        </Box>
      </div>
    </StyledProfile>
  )
}

export default Profile