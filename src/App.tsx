import { Container, ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Layout from './components/layouts/Layout'
import EditProfile from './pages/EditProfile'
import NewGame from './pages/NewGame'
import MyGame from './pages/MyGame'
import NewMatch from './pages/NewMatch'
import Landing from './pages/Landing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" >
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path='/login' element={<Login />}/>
            <Route element={<Layout />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/editprofile' element={<EditProfile />} />
              <Route path='/addnewgame' element={<NewGame />} />
              <Route path='/mygames' element={<MyGame />} />
              <Route path='/editornewmatch' element={<NewMatch />} />
            </Route> 
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
