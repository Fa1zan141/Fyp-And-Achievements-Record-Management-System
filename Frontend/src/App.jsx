import React from 'react'
import Splash from './Splash'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentDashboard from './StudentDashboard'
import TeachersDashboard from './TeachersDashboard'
import AdminDashboard from './AdminDashboard'
import AlumniDashboard from './AlumniDashboard'
import FYPRecord from './FYPRecord'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/splash' element={<Splash/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/studentdashboard' element={<StudentDashboard/>}></Route>
      <Route path='/teachersdashboard' element={<TeachersDashboard/>}></Route>
      <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
      <Route path='/alumnidashboard' element={<AlumniDashboard/>}></Route>
      <Route path='/fyprecord' element={<FYPRecord/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App