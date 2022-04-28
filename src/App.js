import React, {useEffect} from 'react';
//import './App.css';
import './global.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from "./views/Login.js";
import Navbar from './components/Layout/NavBar.js';

import Home from "./views/Home.js";
import FormPerfil from "./views/FormPerfil.js";
import CrudApi from "./views/CrudApi";
//import LogOut from "./views/LogOut";

//const dataJSON = JSON.parse(localStorage.getItem('data'));


  const Logi = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
     </Routes>
    </Router>
  );
}

 const LogOut = () => {
localStorage.removeItem('data');
  useNavigate('/') 
} 
const Dashboard = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/list' element={<CrudApi/>} />
        <Route path='/perfil' element={<FormPerfil/>} />
        <Route path='/logaut' element={  <LogOut/> } />
      </Routes>
    </Router>
  </>
  );
} 
let checkSesion
 const dataJSON = JSON.parse(localStorage.getItem('data'));
  console.log(dataJSON)
  if (!dataJSON) {
    checkSesion = false
      } else {
    checkSesion= true
    }     
    function App() {
  /* useEffect(() => {
    if (dataJSON) {
      localStorage.clear();
     <Navigate to ='/'/>}
    console.log("Carlitos holi :D")
    }, [checkSesion]);  */

  return (
    checkSesion ? <Dashboard/> : <Logi/>
 );
}
export default App;