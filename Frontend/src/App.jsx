import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import StudentDashboard from './StudentDashboard';
import TeachersDashboard from './TeachersDashboard';
import AdminDashboard from './AdminDashboard';
import AlumniDashboard from './AlumniDashboard';
import FYPRecord from './FYPRecord';
import AchievementsRecord from './AchievementsRecord';
import AddAchievementsRecord from './AddAchievementsRecord';
import AddFypRecord from './AddFypRecord';
import UpdateAchievementsRecord from './UpdateAchievementsRecord';
import UpdateFypRecord from './UpdateFypRecord';
import AdminProfile from './AdminProfile';
import StudentProfile from './StudentProfile';
import TeachersProfile from './TeachersProfile';
import CreateAlumniProfile from './CreateAlumniProfile';
import UpdateAlumniProfile from './UpdateAlumniProfile';
import AlumniProfiles from './AlumniProfiles';
import AProfile from './AProfile';
import FypFullRecord from './FypFullRecord';
import AchievementsFullRecord from './AchievementsFullRecord';
import News from './News';
import Addnews from './Addnews';
import Newspostfullrecord from './Newspostfullrecord';
import AuthProvider from './auth/auth'; 

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path='/splash' element={<Splash />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/studentdashboard' element={<StudentDashboard />} />
          <Route path='/teachersdashboard' element={<TeachersDashboard />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/alumnidashboard' element={<AlumniDashboard />} />
          <Route path='/fyprecord' element={<FYPRecord />} />
          <Route path='/achievementsrecord' element={<AchievementsRecord />} />
          <Route path='/news' element={<News />} />
          <Route path='/addachievement' element={<AddAchievementsRecord />} />
          <Route path='/addfyp' element={<AddFypRecord />} />
          <Route path='/addnews' element={<Addnews />} />
          <Route path='/updateachievement/:id' element={<UpdateAchievementsRecord />} />
          <Route path='/updatefyp/:id' element={<UpdateFypRecord />} />
          <Route path='/adminprofile' element={<AdminProfile />} />
          <Route path='/studentprofile' element={<StudentProfile />} />
          <Route path='/teachersprofile' element={<TeachersProfile />} />
          <Route path='/createalumniprofile' element={<CreateAlumniProfile />} />
          <Route path='/updatealumniprofile' element={<UpdateAlumniProfile />} />
          <Route path='/alumniprofiles' element={<AlumniProfiles />} />
          <Route path='/CurrentAlumniProfile' element={<AProfile />} />
          <Route path='/fullrecord/:id' element={<FypFullRecord />} />
          <Route path='/achievementfullrecord/:id' element={<AchievementsFullRecord />} />
          <Route path='/newsrecord/:id' element={<Newspostfullrecord />} />
          <Route path='/logout' element={<Splash />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
