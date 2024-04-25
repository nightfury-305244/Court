import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Profile from './pages/Profile'
import Layout from './components/layouts/Layout'
import EditProfile from './pages/EditProfile'
import NewGame from './pages/NewGame'
import MyGame from './pages/MyGame'
import NewMatch from './pages/NewMatch'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { useAppSelector } from './store/hook'

function App() {
  const {token} = useAppSelector(({user}) => user)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {token ? (
          <Route element={<Layout />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/editprofile' element={<EditProfile />} />
            <Route path='/addnewgame' element={<NewGame />} />
            <Route path='/mygames' element={<MyGame />} />
            <Route path='/editornewmatch' element={<NewMatch />} />
            <Route path='*' element={<Navigate to='/profile' />} />
          </Route> 
        ):(
          <>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='*' element={<Navigate to='/login' />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
