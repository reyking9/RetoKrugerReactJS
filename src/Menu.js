import React from 'react';
import './App.css';
import Navbar from './components/Layout/NavBar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./views/Home.js";
import ListVacunados from "./views/CrudApi";
import FormPerfil from "./views/FormPerfil.js";

function Menu() {
  return (
    <>
      <Router>      
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/list' element={<ListVacunados/>} />
          <Route path='/perfil' element={<FormPerfil/>} />
        </Routes>
      </Router>
    </>
  );
}
  export default Menu;