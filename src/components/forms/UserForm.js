import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = (props) => {
	const initialFormState = { id: null, cedula: '', nombres: '', apellidos: '', email: '', rol: 'Empleado', fecha_nacimiento: '', direccion: '', telefono: '', estado_vacunacion: '', password: '' };  
	const { register, errors, handleSubmit } = useForm({
		defaultValues: props.user ? props.user : initialFormState,
	});
	return (
		<div class="login">
		<div class="login-screen">
			<div class="app-title">
				<h1>Sistema Vacunación</h1>
			</div>
			<div class="login-form">
				<div class="control-group">
		<form onSubmit={handleSubmit(props.onSubmit)}>
			<label>Cédula</label>
			<input 
				type='text'
				name='cedula'
			 	{...register('cedula', { required: true })}
				 
				 />
			<div>{errors?.cedula?.message}</div>
			<label>Nombres</label>
			<input
				type='text'
				name='nombre'
				{...register('nombres', { required: true })}
			/>
			<div>{errors?.nombre?.message}</div>
			<label>Apellidos</label>
			<input
				type='text'
				name='apellido'
				{...register('apellidos', { required: true })}
			/>
			<div>{errors?.apellido?.message}</div>
			<label>Correo Electronico</label>
			<input
				type='text'
				name='email'
				{...register('email', { required: true })}
			/>
			<div>{errors?.email?.message}</div>
			<label>Contraseña</label>
			<input
				type='text'
				name='password'
				{...register('password', { required: true })}
			/>
			<div>{errors?.email?.message}</div>


			
			<button>{props.user ? 'Editar Usuario' : 'Agregar Usuario'}</button>
		</form>
				</div>
			</div>
		</div>
	</div>
	);
};

export default UserForm;
