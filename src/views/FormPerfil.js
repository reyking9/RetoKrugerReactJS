import React, {useEffect, useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';

let api = helpHttp();
let url = "http://localhost:5000/UsersVacunation";

function FormPerfil(){
  const dataJSON = JSON.parse(localStorage.getItem('data'));
  console.log(dataJSON)
  const [users, setUsers] = useState([dataJSON]);
  useEffect(() => {
    helpHttp()
      .get(url+"/"+dataJSON.id)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setUsers(res);
        } else {
          setUsers(null);
        }
      });
  }, [url+"/"+dataJSON.id]);
  const NuevoDato = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
     console.log(e.target.name, e.target.value);
  }
  const updateUser = () => {
    let endpoint = `${url}/${dataJSON.id}`;
    console.log(endpoint);
    let options = {
      body: users,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        setUsers([...users, res]);
      }
    })
  }; 
  return (
    <div class="login">
		<div class="login-screen">
			<div class="app-title">
				<h1>Sistema Vacunación</h1>
			</div>
			<div class="login-form">
				<div class="control-group">
      <h1>DATOS DE PERFIL</h1>
      <form>
          <div key={ dataJSON.id }>
            <label  >Cédula:</label>
            <input type="text" name="cedula" value={users.cedula} onChange={NuevoDato}/>
            <label>Nombres:</label>
            <input type="text" name="nombres" value={users.nombres} onChange={NuevoDato}/>
            <label>Apellidos:</label>
            <input type="text" name="apellidos" value={users.apellidos} onChange={NuevoDato}/>
            <label>Correo electronico:</label>
            <input type="text" name="email" value={users.email} onChange={NuevoDato}/>
            <label>Fecha de nacimiento:</label>
            <input type="date" name="fecha_nacimiento" value={users.fecha_nacimiento} onChange={NuevoDato}/>
            <label>Dirección:</label>
            <input type="text" name="direccion" value={users.direccion} onChange={NuevoDato}/>
            <label>Telefono:</label>
            <input type="text" name="telefono" value={users.telefono} onChange={NuevoDato}/>
            <label>Estado de vacunación:</label>
            <select name="estado_vacunacion" value={users.estado_vacunacion} onChange={NuevoDato}>
            <option>Sin Dato</option>
            <option >Vacunado</option>
            <option >No Vacunado</option>
            </select>
            <label>Contraseña:</label>
            <input type="password" name="password" value={users.password} onChange={NuevoDato}/>
            <button onClick={updateUser} > Guardar</button>
            </div>
       </form>
    </div>
    </div>
    </div>
    </div>
  );
}
export default FormPerfil;
