import React from "react";
import './App.css'
import {Route, Routes} from 'react-router';
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import ForgotPassword from "./components/Pages/Login/ForgotPassword";
import ResetPassword from "./components/Pages/Login/ResetPassword";
import Courses from "./components/Pages/Courses/Courses";
import Community from "./components/Pages/Community/Community";
import Help from "./components/Pages/Help/Help";

import Assignments from "./components/Pages/Assignments/Assignments";
import TotalAssignment from "./components/Pages/Assignments/TotalAssignment";
import Assignment from "./components/Pages/Assignments/Assignment";
import AssignmentGrade from "./components/Pages/Assignments/AssignmentGrade";
import TaskProgress from "./components/Pages/Assignments/TaskProgress";
import Settings from './components/Pages/Settings/Settings'
// import LightMode from './components/Pages/LightMode/LightMode'
import Message from './components/Pages/Message/Message'
import Logout from './components/Pages/Logout/Logout'
import Profile from './components/Pages/Settings/Profile/Profile'
import ProfileUpdatePage from "./components/Pages/Settings/ProfileUpdatePage"
import CheckModal from "./components/Pages/Assignments/CheckModal";


function App() {
  return (

    <Routes>
 
    {/* Pages */}
   <Route exact path= '/' element = {<LandingPage/>}/>
    <Route exact path= '/signup' element = {<Signup/>}/>
    <Route exact path= '/login' element = {<Login/>}/>
    <Route exact path= '/dashboard' element = {<Dashboard/>}/>
    <Route exact path= '/forgotpassword' element= {<ForgotPassword />} />
    <Route exact path= '/resetpassword' element= {<ResetPassword />} />
    <Route exact path= '/courses' element= {<Courses />} />
    <Route exact path= '/community' element = {<Community/>}/>
   <Route exact path= '/help' element = {<Help/>}/>
   <Route exact path= '/totalassignment' element = {<TotalAssignment/>}/>
   <Route exact path= '/taskprogress' element = {<TaskProgress/>}/>
   <Route exact path= '/assignment' element = {<Assignment/>}/>
   <Route exact path= '/checkModal' element = {<CheckModal/>}/>

   <Route exact path= '/assignmentgrade' element = {<AssignmentGrade/>}/>
   <Route exact path= '/profile-update-page' element = {<ProfileUpdatePage/>}/>





    {/* Sidebar pages */}
   <Route path= '/courses' element = {<Courses/>}/>
   <Route path= '/assignments' element = {<Assignments/>}/>
   <Route path= '/settings' element = {<Settings/>}/>
   <Route path= '/message' element = {<Message/>}/>
   <Route path= '/community' element = {<Community/>}/>
   <Route path= '/dashboard' element = {<Dashboard/>}/>
   <Route path= '/logout' element = {<Logout/>}/>
   {/* <Route path= '/lightmode' element = {<LightMode/>}/> */}
   <Route path= '/help' element = {<Help/>}/>

   </Routes>
  );
}

export default App;
