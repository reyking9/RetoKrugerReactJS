import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./views/Login.js";
import Navbar from './components/Layout/NavBar.js';

import Home from "./views/Home.js";
import FormPerfil from "./views/FormPerfil.js";
import CrudApi from "./views/CrudApi";
 const Logi = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
     </Routes>
    </Router>
  );
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
  return (
    checkSesion ? <Dashboard/> : <Logi/>
 );
}
export default App;