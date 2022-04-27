import React, { useState, useEffect } from 'react';
import UserTable from '../components/tables/UserTable';
import AddUserForm from '../components/forms/AddUserForm';
import EditUserForm from '../components/forms/EditUserForm';
//import Data from "../json/ListVacunados.json";
import { helpHttp } from '../helpers/helpHttp';


const CrudApi = () => {
  let api = helpHttp();
  let url = "http://localhost:5000/UsersVacunation";
  const [users, setUsers] = useState([]);
  // const usersData = [];
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setUsers(res);
        } else {
          setUsers(null);
        }
      });
  }, [url]);
  const addUser = (user) => {
    // setUsers([...users, user]);
    let options = {
      body: user,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      user.id = Date.now();
      console.log(res);
      if (!res.err) {
        setUsers([...users, res]);
      }
    })
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    let Confirmation = window.confirm(
      "Esta seguro de eliminar este usuario?"
    );
    if (Confirmation) {
      let endpoint = `${url}/${id}`;
      let options = {
        body: editUser,
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        let newData = users.filter((user) => user.id !== id);
        setUsers(newData);
      })
    }
    else {
      return;
    }
    setUsers(users.filter((user) => user.id !== id));
  };
  const [isEditing, setEditing] = useState(false);
  const initialFormState = { id: null, cedula: '', nombres: '', apellidos: '', email: '', rol: '', fecha_nacimiento: '', direccion: '', telefono: '', estado_vacunacion: '', password: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id, editUser) => {
    let endpoint = `${url}/${editUser.id}`;
    console.log(endpoint);
    setEditing(false);
    let options = {
      body: editUser,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        console.log(endpoint)
        let newUsers = users.map((u) => (u.id === editUser.id ? editUser : u));
        console.log(newUsers)
        setUsers(newUsers);
      }
    })
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

export default CrudApi;
