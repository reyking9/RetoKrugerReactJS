import React from 'react';

const UserTable = (props) => {
//	console.log(props.users[0])
	const datos = (props.users)
//	console.log(datos)
	return (
		<table>
			<thead>
				<tr>
					<th>Cédula</th>
					<th>Nombres</th>
					<th>Apellidos</th>
					<th>Correo Electrónico</th>
					<th>Acción</th>
				</tr>
			</thead>
			<tbody>
				{datos.length > 0 ? (
					datos.map((user) => (
						<tr key={user.id}>
							<td>{user.cedula}</td>
							<td>{user.nombres}</td>
							<td>{user.apellidos}</td>
							<td>{user.email}</td>
							<td>
								<button
									className='button muted-button'
									onClick={() => {
										props.edit(user);
									}}
								>
									Editar
								</button>
								<button
									className='button muted-button'
									onClick={() => {
										props.delete(user.id);
									}}
								>
									Eliminar
								</button>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan={3}>No hay usuarios</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default UserTable;
