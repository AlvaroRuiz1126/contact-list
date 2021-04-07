import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [newUser, setNewUser] = useState({
        nombre: '',
        apellido: '',
        cedula: null,
        email: '',
        telefono: '',
    });

    return (
        <UserContext.Provider value={{newUser, setNewUser}} >
            {children}
        </UserContext.Provider>
    );
};