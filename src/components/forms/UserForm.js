import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = (props) => {
	const initialFormState = { id: null, cedula: '', nombres: '', apellidos: '', email: '', rol: '', fecha_nacimiento: '', direccion: '', telefono: '', estado_vacunacion: '', password: ''  };
	const { register, errors, handleSubmit, setValue } = useForm({
		defaultValues: props.user ? props.user : initialFormState,
	});
	setValue('cedula', props.user ? props.user.cedula : '');
	setValue('nombres', props.user ? props.user.nombres : '');
	setValue('apellidos', props.user ? props.user.apellidos : '');
	setValue('email', props.user ? props.user.email : '');
	setValue('rol', props.user ? props.user.rol : '');
	setValue('fecha_nacimiento', props.user ? props.user.fecha_nacimiento : '');
	setValue('direccion', props.user ? props.user.direccion : '');
	setValue('telefono', props.user ? props.user.telefono : '');
	setValue('estado_vacunacion', props.user ? props.user.estado_vacunacion : '');
	setValue('password', props.user ? props.user.password : '');

	return (
		<form onSubmit={handleSubmit(props.onSubmit)}>
			<label>Cédula</label>
			<input type='text' {...register('cedula', { required: true })} />
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
			
			<button>{props.user ? 'Editar Usuario' : 'Agregar Usuario'}</button>
		</form>
	);
};

export default UserForm;
