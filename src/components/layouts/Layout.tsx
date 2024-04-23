import Header from '../common/Header';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledLayout = styled("div")(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
}))

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet/>
      <Footer />
    </StyledLayout>
  )
}

export default Layout