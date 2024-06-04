import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './auth/auth'; 
import ProtectedRoute from './auth/ProtectedRoute';

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
import AlumniProfile from './AlumniProfile';
import UpdateStudentProfile from './UpdateStudentProfile';
import UpdateTeachersProfile from './UpdateTeachersProfile';
import UpdateAdminProfile from './UpdateAdminProfile';
import StudentFypRecord from './StudentFypRecord';
import ForAllFypRecord from './ForAllFypRecord';
import StudentAchievementRecord from './StudentAchievementRecord';
import ForAllAchievementRecord from './ForAllAchievementRecord';
import AllAlumniProfiles from './AllAlumniProfiles';
import SingleAlumniProfile from './SingleAlumniProfile';
import AdminUserManagement from './AdminUserManagement';
import CurrentUserProfile from './CurrentUserProfile';
import ChatDashboard from './ChatDashboard';
import Forallnews from './Forallnews'
import Unauthorized from './Unauthorized'
function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path='/splash' element={<Splash />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />

          <Route
            path='/studentdashboard'
            element={
              <ProtectedRoute roles={['Student']}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/teachersdashboard'
            element={
              <ProtectedRoute roles={['Teacher']}>
                <TeachersDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admindashboard'
            element={
              <ProtectedRoute roles={['Admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/alumnidashboard'
            element={
              <ProtectedRoute roles={['Alumni']}>
                <AlumniDashboard />
              </ProtectedRoute>
            }
          />

          <Route path='/forallfyprecord' element={<ForAllFypRecord />} />
          <Route path='/forallachievementrecord' element={<ForAllAchievementRecord />} />


          <Route path='/allnews' element={<Forallnews />} />

          <Route
            path='/news'
            element={
              <ProtectedRoute roles={['Admin']}>
                <News />
              </ProtectedRoute>
            }
          />
          <Route
            path='/news?searchbar='
            element={
              <ProtectedRoute roles={['Admin']}>
                <News />
              </ProtectedRoute>
            }
          />

          <Route
            path='/fyprecord'
            element={
              <ProtectedRoute roles={['Admin']}>
                <FYPRecord />
              </ProtectedRoute>
            }
          />
           <Route
            path='/fyprecord?searchbar='
            element={
              <ProtectedRoute roles={['Admin']}>
                <FYPRecord />
              </ProtectedRoute>
            }
          />

          <Route
            path='/studentfyprecord'
            element={
              <ProtectedRoute roles={['Student']}>
                <StudentFypRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path='/studentachievementrecord'
            element={
              <ProtectedRoute roles={['Student']}>
                <StudentAchievementRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path='/achievementsrecord'
            element={
              <ProtectedRoute roles={['Admin']}>
                <AchievementsRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path='/achievementsrecord?searchbar='
            element={
              <ProtectedRoute roles={['Admin']}>
                <AchievementsRecord />
              </ProtectedRoute>
            }
          />

          <Route
            path='/addachievement'
            element={
              <ProtectedRoute roles={['Student']}>
                <AddAchievementsRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path='/addfyp'
            element={
              <ProtectedRoute roles={['Student']}>
                <AddFypRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path='/addnews'
            element={
              <ProtectedRoute roles={['Alumni']}>
                <Addnews />
              </ProtectedRoute>
            }
          />
          <Route
            path='/updateachievement/:id'
            element={
              <ProtectedRoute roles={['Student']}>
                <UpdateAchievementsRecord />
              </ProtectedRoute>
            }
          />
           <Route
            path='/updatefyp/:id'
            element={
              <ProtectedRoute roles={['Student']}>
                <UpdateFypRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path='/adminprofile'
            element={
              <ProtectedRoute roles={['Admin']}>
                <AdminProfile />
              </ProtectedRoute>
            }
          />
           <Route
            path='/studentprofile'
            element={
              <ProtectedRoute roles={['Student']}>
                <StudentProfile />
              </ProtectedRoute>
            }
          />
           <Route
            path='/teachersprofile'
            element={
              <ProtectedRoute roles={['Teacher']}>
                <TeachersProfile />
              </ProtectedRoute>
            }
          />
           <Route
            path='/alumniprofile'
            element={
              <ProtectedRoute roles={['Alumni']}>
                <AlumniProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path='/createalumniprofile'
            element={
              <ProtectedRoute roles={['Alumni']}>
                <CreateAlumniProfile />
              </ProtectedRoute>
            }
          />
           <Route
            path='/updatealumniprofile'
            element={
              <ProtectedRoute roles={['Alumni']}>
                <UpdateAlumniProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path='/AllAlumniProfiles'
            element={
              <ProtectedRoute roles={['Admin']}>
                <AllAlumniProfiles />
              </ProtectedRoute>
            }
          />
          <Route
            path='/Allusers'
            element={
              <ProtectedRoute roles={['Admin']}>
                <AdminUserManagement />
              </ProtectedRoute>
            }
          />
          <Route path='/alumniprofiles' element={<AlumniProfiles />} />
          <Route path='/ChatDashboard' element={<ChatDashboard />} />
          <Route path='/CurrentAlumniProfile/:id' element={<AProfile />} />
          <Route path='/CurrentUserProfile/:id' element={<CurrentUserProfile />} />
          <Route path='/singleAlumniProfile/:id' element={<SingleAlumniProfile />} />
          <Route path='/fullrecord/:id' element={<FypFullRecord />} />
          <Route path='/achievementfullrecord/:id' element={<AchievementsFullRecord />} />
          <Route path='/newsrecord/:id' element={<Newspostfullrecord />} />
          <Route path='/updatestudentprofile' element={<UpdateStudentProfile />} />
          <Route path='/updateteachersprofile' element={<UpdateTeachersProfile />} />
          <Route path='/updateadminprofile' element={<UpdateAdminProfile />} />
          <Route path='/unauthorized' element={<Unauthorized/>}></Route>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
