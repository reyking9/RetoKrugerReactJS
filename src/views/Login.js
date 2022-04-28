import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import Menu from '../Menu.js'
import React from 'react';
import ReactDOM from 'react-dom/client';


let url = "http://localhost:5000/UsersVacunation";
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
  const login = async () => {
    let options = {
      params: { email: autentification.email, password: autentification.password },
    };
    await axios.get(url, options)
      .then(res => {
        console.log(res.data[0])
        if (res.data[0] != null) {
          window.localStorage.setItem('data', JSON.stringify(res.data[0]));
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

  	<div class="login">
    <div class="input">
      <div class="blockinput">
				<h1>Sistema Vacunación</h1>
			</div>
			<div class="login-form">
				<div class="control-group">
    <Form onSubmit={handleSubmit}

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
      class="login-field-icon fui-user"
        label="Correo"
        name="email"
        rules={[
          {
            required: true,
            message: 'Ingrese un correo',
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
      class="login-field-icon fui-user"
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: 'Ingrese una contraseña',
          },
        ]}
      >
        <Input.Password
         className="login-field"
          name="password"
          value={autentification.password}
          onChange={inputChange}
        />
      </Form.Item>
     
        <Button className="btn btn-primary btn-large btn-block"  type="primary" htmlType="submit" onClick={() => (login())}>
          Ingresar
        </Button>
   
    </Form>
    </div>
   </div> 
   </div>
   </div> 

  );
};
export default Login;