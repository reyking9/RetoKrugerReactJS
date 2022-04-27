import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Pagina de incio',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Lista de usuarios ',
    path: '/list',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/perfil',
    icon: <FaIcons.FaUserCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Cerrar Sesion',
    path: '/perfil',
    icon: <IoIcons.IoMdExit/>,
    cName: 'nav-text'
  },
];