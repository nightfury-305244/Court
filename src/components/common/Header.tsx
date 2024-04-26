import { IconButton, Menu, MenuItem, styled } from '@mui/material'
import bell from "../../assets/bell.svg"
import avatar from "../../assets/avatar.png"
import React from 'react';
import { useAppDispatch } from '../../store/hook';
import { logoutUser } from '../../store/authSlice';

const StyledHeader = styled("div")(({theme}) => ({
  width: '100%',
  padding: "13px 30px 17px 28px",
  backgroundColor: theme.palette.secondary.main,
  "div": {
    display: 'flex',
    justifyContent: 'space-between',
    ".avatar": {
      width: "32px",
      height: "32px"
    },
    ".bell": {
      width: "24px",
      height: "24px"  
    } 
  }
}));


const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logoutUser())
  };

  return (
    <StyledHeader>
      <div>
        <IconButton>
          <img className='bell' src={bell} alt='notification' />
        </IconButton>
        <IconButton onClick={handleClick}>
          <img className='avatar' src={avatar} alt='notification' />
        </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      </div>
    </StyledHeader>
  )
}

export default Header