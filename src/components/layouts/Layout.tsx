import Header from '../common/Header';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledLayout = styled("div")(({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}))

const Layout = () => {
  return (
    <StyledLayout>
      <div>
        <Header />
        <Outlet/>
      </div>
      <Footer />
    </StyledLayout>
  )
}

export default Layout