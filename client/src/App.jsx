import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { AuthContext } from './context/AuthContext'

function App () {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Register />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
