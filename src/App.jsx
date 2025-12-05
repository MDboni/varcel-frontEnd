import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import SignIn from './components/SignInUp/SignIn'
import SignUp from './components/SignInUp/SignUp'
import OtpPage from './components/SignInUp/OtpPage'
import ProtectedRoute from './components/Route/ProtectedRoute'
import DashboardLayout from './components/Dashboard/DashboardLayout '
import ManageUsers from './components/Dashboard/Admin/ManageUsers'
import ManageCourses from './components/Dashboard/Admin/ManageCourses'
import ReviewAssignments from './components/Dashboard/Admin/ReviewAssignments'
import MyCourses from './components/Dashboard/Student/MyCourses'
import SubmitAssignments from './components/Dashboard/Student/SubmitAssignments'
import ProgressTracker from './components/Dashboard/Student/ProgressTracker'
import DetailsPage from './pages/Home/DetailsPage'
import Payment from './components/Payment/Payment'
import CoursePage from './pages/Course/CoursePage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/courses' element={<CoursePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path="/courses/:id" element={ <ProtectedRoute> < DetailsPage/></ProtectedRoute>} />
          <Route path='/payment/:courseId' element={<Payment />} />

{/* login logout Otp  */}
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/verify-otp' element={<OtpPage/>}/>
          <Route path='/signUp' element={<SignUp/>}/>

{/* DashBoard  */}
          
        <Route
          path='/dashboard'
          element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}
        >
          {/* Admin Routes */}
          <Route path='users' element={<ManageUsers />} />
          <Route path='courses' element={<ManageCourses />} />
          <Route path='assignments' element={<ReviewAssignments />} />

          {/* Student Routes */}
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='submit-assignment' element={<SubmitAssignments />} />
          <Route path='progress' element={<ProgressTracker />} />
        </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App