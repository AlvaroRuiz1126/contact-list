import React, { createContext, useEffect, useState } from 'react';
import { usersServices } from '../services/userAPI';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersServices().then((resp) => setUsers([...resp.users]));
    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers }} >
            {children}
        </UserContext.Provider>
    );
};