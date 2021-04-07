import React from 'react';
import AppRouter from './routers/AppRouter';
import { UserProvider } from './context/UserContext';

const UsersApp = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default UsersApp;