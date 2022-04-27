import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserTable from '../components/tables/UserTable';
import AddUserForm from '../components/forms/AddUserForm';
import EditUserForm from '../components/forms/EditUserForm';
import Data from "../json/ListVacunados.json";


const ListVacunados = () => {
const usersData = [
  Data.map(user => {
    return(
      { id: user.id, 
      nombre: user.nombres, 
      apellido: user.apellidos, 
      cedula: user.cedula, 
      email: user.email, 
      fecha_nacimiento: user.fecha_nacimiento, 
      direccion: user.direccion,
      telefono: user.telefono,
      estado_vacunacion: user.estado_vacunacion}
   )
  })
];
const [users, setUsers] = useState(usersData);
console.log(users)
const addUser = (user) => {
  setUsers([...users, user]);
};

const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id !== id));
};

const [isEditing, setEditing] = useState(false);

const initialFormState = { id: null, name: '', username: '' };
const [currentUser, setCurrentUser] = useState(initialFormState);

const editUser = (user) => {
  setEditing(true);
  setCurrentUser(user);
};

const updateUser = (id, editUser) => {
  setEditing(false);
  setUsers(users.map((user) => (user.id === id ? editUser : user)));
};

return (
  <div className='container'>
    <h1>Lista de vacunados</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        {isEditing ? (
          <div>
            <h2>Editar Usuario</h2>
            <EditUserForm user={currentUser} edit={updateUser} />
          </div>
        ) : (
          <div>
            <h2>Agregar Usuario</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
      <div className='flex-large'>
        <h2>Lista de usuarios</h2>
        <UserTable users={users} delete={deleteUser} isEditing={setEditing} edit={editUser} />
      </div>
    </div>
  </div>
);
};

export default ListVacunados;
