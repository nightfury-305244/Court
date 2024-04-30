import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import Layout from './components/layouts/Layout'
import EditProfile from './pages/profile/EditProfile'
import NewGame from './pages/match/NewGame'
import MyGames from './pages/match/MyGames'
import NewMatch from './pages/match/NewMatch'
import Landing from './pages/auth/Landing'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import { useAppSelector } from './store/hook'

function App() {
  const {token} = useAppSelector(({auth}) => auth)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {token ? (
          <Route element={<Layout />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/games' element={<NewGame />} />
            <Route path='/games/mygame' element={<MyGames />} />
            <Route path='/games/newmatch' element={<NewMatch />} />
            <Route path='*' element={<Navigate to='/profile' />} />
          </Route> 
        ):(
          <>
            <Route path='/auth/login' element={<Login />}/>
            <Route path='/auth/signup' element={<SignUp />}/>
            <Route path='*' element={<Navigate to='/auth/login' />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
