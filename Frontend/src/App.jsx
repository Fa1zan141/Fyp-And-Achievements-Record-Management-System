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
import AchievementsRecord from './AchievementsRecord'
import NewsandJobsPost from './NewsandJobsPost'
import AddAchievementsRecord from './AddAchievementsRecord'
import AddFypRecord from './AddFypRecord'
import UpdateAchievementsRecord from './UpdateAchievementsRecord'
import UpdateFypRecord from './UpdateFypRecord'
import AdminProfile from './AdminProfile'
import StudentProfile from './StudentProfile'
import TeachersProfile from './TeachersProfile'
import CreateAlumniProfile from './CreateAlumniProfile'
import UpdateAlumniProfile from './UpdateAlumniProfile'
import AlumniProfiles from './AlumniProfiles'
import AProfile from './AProfile'
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
      <Route path='/achievementsrecord' element={<AchievementsRecord/>}></Route>
      <Route path='/newsandjobspost' element={<NewsandJobsPost/>}></Route>
      <Route path='/addachievement' element={<AddAchievementsRecord/>}></Route>
      <Route path='/addfyp' element={<AddFypRecord/>}></Route>
      <Route path='/updateachievement' element={<UpdateAchievementsRecord/>}></Route>
      <Route path='/updatefyp' element={<UpdateFypRecord/>}></Route>
      <Route path='/adminprofile' element={<AdminProfile/>}></Route>
      <Route path='/studentprofile' element={<StudentProfile/>}></Route>
      <Route path='/teachersprofile' element={<TeachersProfile/>}></Route>
      <Route path='/createalumniprofile' element={<CreateAlumniProfile/>}></Route>
      <Route path='/updatealumniprofile' element={<UpdateAlumniProfile/>}></Route>
      <Route path='/alumniprofiles' element={<AlumniProfiles/>}></Route>
      <Route path='/CurrentAlumniProfile' element={<AProfile/>}></Route>
      <Route path='/logout' element={<Splash/>}></Route>
      <Route path="*" element={<div>Invalid route</div>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App