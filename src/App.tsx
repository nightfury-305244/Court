import { Container, ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Layout from './components/layouts/Layout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" >
        <Router>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/' element={<Layout />}>
              <Route path='/profile' element={<Profile />} />
            </Route> 
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
