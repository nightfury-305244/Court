import { styled } from '@mui/material';

const StyledFooter = styled("div")(({theme}) => ({
  padding: "2px 19px 22px 19px",
  "div": {
    width: '355px',
    height: "49px",
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '25px',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: "8.5px 20px"
  }
}));


const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <img src='/src/assets/majesticons_home.svg' alt='home' />
        <img src='/src/assets/tennis-ball_1.svg' alt='tennis-ball' />
        <img src='/src/assets/basil_add-solid.svg' alt='plus' />
        <img src='/src/assets/majesticons_chat.svg' alt='chat' />
        <img src='/src/assets/solar_chart-bold.svg' alt='chart' />
      </div>
    </StyledFooter>
  )
}

export default Footer