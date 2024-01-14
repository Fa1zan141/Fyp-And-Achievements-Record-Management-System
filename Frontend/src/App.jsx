import React from 'react'
import Splash from './Splash'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/splash' element={<Splash/>}>
      </Route>
      <Route path='/register' element={<Register/>}>
      </Route>
      <Route path='/login' element={<Login/>}>
      </Route>
      <Route path='/home' element={<Home/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App