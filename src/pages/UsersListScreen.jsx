import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { usersServices } from '../services/userAPI';
import { UserContext } from '../context/UserContext';
import UserRow from '../components/UserRow';

const UsersListScreen = () => {
  const { users, setUsers } = useContext(UserContext);
  const history = useHistory();

  const handleAdd = () => {
    history.push("/new");
  };

  useEffect(() => {
    usersServices().then((resp) => setUsers([...resp.users]));
  }, [setUsers]);

  return (
    <div className="box">
      <h2 className="title-list">Lista de Contactos</h2>

      <div className="content-table center">
        {users.length > 0 ? (
          <table className="contacts-list">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cédula</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <UserRow key={user.id} user={user} /> 
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay usuarios registrados hasta el momento</p>
        )}
      </div>

      <div className="btn-add">
        <button className="btn-primary" onClick={handleAdd}>
          Añadir Usuario
        </button>
      </div>
    </div>
  );
};

export default UsersListScreen;