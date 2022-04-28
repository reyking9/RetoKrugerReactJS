import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Pagina de incio',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    rol: 'Empleado'
  },
  {
    title: 'Lista de usuarios ',
    path: '/list',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    rol: 'Administrador'
  },
  {
    title: 'Perfil',
    path: '/perfil',
    icon: <FaIcons.FaUserCircle />,
    cName: 'nav-text',
    rol: 'Empleado'
  },
/*   {
    title: 'Cerrar Sesion',
    path: '/logaut',
    icon: <IoIcons.IoMdExit/>,
    cName: 'nav-text',
    rol: 'Empleado'
  }, */
];