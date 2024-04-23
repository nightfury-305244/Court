import { Typography, styled } from '@mui/material'
import React from 'react'

const StyledProfile = styled("div")(({theme}) => ({
  ".avatar": {
    position: "relative",
    right: "-89px",
    top: "-88px",
  },
  ".avatarBorder": {
    position: "relative",
    right: "-226px",
    top: "-83px",
  },
  ".container": {
    backgroundColor: theme.palette.primary.light,
    margin: "12px 19px",
    borderRadius: "8px",
    display: 'flex',
  }
}))

type Props = {}

const Profile = (props: Props) => {
  return (
    <StyledProfile>
      <img src='/src/assets/dashboard.png' alt='dashboard'/>
      <div className='container'>
        {/* <img className='avatarBorder' src='/src/assets/avatar_border.svg' alt='avatar_border' />
        <img className='avatar' src='/src/assets/avatar.png' alt='avatar' /> */}
        <Typography align='center'>احسان نوروزی</Typography>
        <Typography align='center'>از پرو فایل خودتان را تکمیل کردید</Typography>
        <Typography align='center'>بهترین ها برای ماست!</Typography>
      </div>
    </StyledProfile>
  )
}

export default Profile