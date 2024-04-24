import { styled } from '@mui/material'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = styled("div")(({theme})=>({
  width: "393px",
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}))


const Landing = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Replace with your desired route
    }, 2000); // 3 seconds delay

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigate]);

  return (
    <LandingPage>
      <img src="/src/assets/MetaLogo.png" alt='meta logo' />
    </LandingPage>
  )
}

export default Landing