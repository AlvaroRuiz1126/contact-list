import React, { createContext, useEffect, useState } from 'react';
import { usersServices } from '../services/userAPI';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    // const [newUser, setNewUser] = useState({
    //     nombre: '',
    //     apellido: '',
    //     cedula: '',
    //     correo: '',
    //     telefono: '',
    // });

    useEffect(() => {
        usersServices().then((resp) => setUsers([...resp.users]));
    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers }} >
            {children}
        </UserContext.Provider>
    );
};