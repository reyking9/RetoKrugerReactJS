import { Form, Input, Button, Div } from 'antd';
import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Menu from '../Menu.js'

import React from 'react';
import ReactDOM from 'react-dom/client';

let url = "http://localhost:5000/UsersVacunation";
let api = helpHttp();
const cookies = new Cookies();

const Login = () => {
  const [autentification, SetAutentification] = useState({ email: "", password: "" });
  const inputChange = ({ target }) => {
    SetAutentification({ ...autentification, [target.name]: target.value })
    console.log(autentification)
  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const ingresar = async () => {
    let options = {
      params: { email: autentification.email, password: autentification.password },
    };
    await axios.get(url, options)
      .then(res => {
        console.log(res.data[0])
        if (res.data[0] != null) {
          /*  cookies.set('id', res.data[0].id, { path: '/' });
           cookies.set('cedula', res.data[0].cedula, { path: '/' });
           cookies.set('nombres', res.data[0].nombres, { path: '/' });
           cookies.set('apellidos', res.data[0].apellidos, { path: '/' });
           cookies.set('email', res.data[0].email, { path: '/' }); */
          window.localStorage.setItem('data', JSON.stringify(res.data[0]));
          //    window.localStorage.setItem('id', res.data[0].id);
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(
            <React.StrictMode>
              <Menu />
            </React.StrictMode>
          );
        } else {
          alert('Usuario o contraseña incorrectos')
        }

      })
  }
  return (

   /*  <div>
    <h1>DATOS DE PERFIL</h1>
    <form onSubmit={handleSubmit}>
          <label>Cédula:</label>
          <input type="text" name="email"  value={autentification.email}
          onChange={inputChange}/>
          <label>Contraseña:</label>
          <input type="text" name="password"  value={autentification.password}
          onChange={inputChange}/>
          <button htmlType="submit"  onClick={() => (ingresar())}> Guardar </button>
     </form>
  </div> */
    <Form onSubmit={handleSubmit}
      className='form'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item

        label="Correo"
        name="email"

        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input
          name="email"
          value={autentification.email}
          onChange={inputChange}
        />
      </Form.Item>

      <Form.Item

        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          name="password"
          value={autentification.password}
          onChange={inputChange}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={() => (ingresar())}>
          Ingresar
        </Button>
      </Form.Item>
    </Form>

  );
};
export default Login;