import React from "react";
import {Route, Routes} from 'react-router';
import LandingPage from "./components/Pages/LandingPage";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
function App() {
  return (
  
   <Routes>
   <Route exact path= '/' element = {<LandingPage/>}/>
   <Route exact path= '/signup' element = {<Signup/>}/>
   <Route exact path= '/login' element = {<Login/>}/>
   <Route exact path= '/dashboard' element = {<Dashboard/>}/>
   </Routes>
  );
}

export default App;
