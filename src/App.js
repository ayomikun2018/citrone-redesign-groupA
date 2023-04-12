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
// import Assignments from "./components/Pages/Assignments/Assignments";
function App() {
  return (
  
    <Routes>
    <Route exact path= '/' element = {<LandingPage/>}/>
    <Route exact path= '/signup' element = {<Signup/>}/>
    <Route exact path= '/login' element = {<Login/>}/>
    <Route exact path= '/dashboard' element = {<Dashboard/>}/>
    <Route exact path= '/forgotpassword' element= {<ForgotPassword />} />
    <Route exact path= '/resetpassword' element= {<ResetPassword />} />
    <Route exact path= '/courses' element= {<Courses />} />
    <Route exact path= '/community' element = {<Community/>}/>
   <Route exact path= '/help' element = {<Help/>}/>


   {/* <Route exact path= '/assignments' element = {<Assignments/>}/> */}


   </Routes>
  );
}

export default App;
