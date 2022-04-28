import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const dataJSON = JSON.parse(localStorage.getItem('data'));
  console.log(dataJSON)
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('data');
    navigate('/');
    window.location.reload();
  };


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              console.log(dataJSON.rol)
              return (
                dataJSON.rol === 'Administrador' ? 
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                : dataJSON.rol === item.rol ?
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li> : null

              );
            })
           
            }
             <li className='nav-text' onClick={handleClick}>
            <Link to='/'>
            <IoIcons.IoMdExit/>
              <span> Cerrar Sesion</span>
            </Link>
          </li>

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;