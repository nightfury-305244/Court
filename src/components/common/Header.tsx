import { styled } from '@mui/material'

const StyledHeader = styled("div")(({theme}) => ({
  width: '100%',
  padding: "13px 30px 17px 28px",
  backgroundColor: theme.palette.primary.main,
  "div": {
    display: 'flex',
    justifyContent: 'space-between',
    ".avatar": {
      width: "32px",
      height: "32px"
    } 
  }
}));


const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src='/src/assets/bell.svg' alt='notification' />
        <img className='avatar' src='/src/assets/avatar.png' alt='notification' />
      </div>
    </StyledHeader>
  )
}

export default Header