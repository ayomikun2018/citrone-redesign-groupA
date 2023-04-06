import React from "react";
import {Route, Routes} from 'react-router';
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";
import Dashboard from "./components/Pages/Dashboard/Dashboard";

import Courses from "./components/Pages/Courses/Courses";
import Assignments from "./components/Pages/Assignments/Assignments" 
import Message from "./components/Pages/Message/Message" 
import Settings from "./components/Pages/Settings/Settings"
import Community from './components/Pages/Community/Community'
import Logout from "./components/Pages/Logout/Logout"
import LightMode from './components/Pages/LightMode/LightMode'
import AddEvents from './components/Pages/Dashboard/MainPage/AddEvent/AddEvents'

function App() {
  return (
  
   <Routes>

    {/* Pages */}
   <Route exact path= '/' element = {<LandingPage/>}/>
   <Route exact path= '/signup' element = {<Signup/>}/>
   <Route exact path= '/login' element = {<Login/>}/>
   <Route exact path= '/dashboard' element = {<Dashboard/>}/>


    {/* Sidebar pages */}
   <Route path= '/courses' element = {<Courses/>}/>
   <Route path= '/assignments' element = {<Assignments/>}/>
   <Route path= '/settings' element = {<Settings/>}/>
   <Route path= '/message' element = {<Message/>}/>
   <Route path= '/community' element = {<Community/>}/>
   <Route path= '/dashboard' element = {<Dashboard/>}/>
   <Route path= '/logout' element = {<Logout/>}/>
   <Route path= '/lightmode' element = {<LightMode/>}/>
   <Route path= '/addevents' element = {<AddEvents/>}/>

   </Routes>
  );
}

export default App;
