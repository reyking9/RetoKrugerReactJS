import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginRoute from '../LoginRoute.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../views/Login.js";

const LogOut = () => {
localStorage.removeItem('data');
/*const root = ReactDOM.createRoot(document.getElementById('root'));


 root.render(
  <React.StrictMode>
    <LoginRoute />
  </React.StrictMode>
); */

return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
   </Routes>
  </Router>
  </>
 );
}
export default LogOut;