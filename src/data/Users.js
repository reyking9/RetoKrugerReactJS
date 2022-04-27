import React, { useState, useEffect } from 'react';



export default function useUsers()
{   
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("json/ListVacunados.json")
            .then(response => response.json())
            .then(data => {setUsers(data)}
            );
    }, []);
    
console.log(users)
    return users}
  /*   export default function Users()
    {   
        const users = useUsers()
        return (
           <div>
                <h1>Lista</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.nombre}
                        </li>
                    ))}
                </ul>
            </div> 
        );
    } */
