import React, { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { usersServices } from '../services/userAPI';

const UsersListScreen = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const handleUpdate = (id) => {
    //console.log("Pagina de nuevo usuario");
    history.push("/update");
  };

  const handleDelete = (id) => {
    //console.log("Pagina de nuevo usuario");
    //console.log(typeof id);
    usersServices(id, {}, "DELETE").then(resp => console.log(resp));
  };

  const handleAdd = () => {
    //console.log("Pagina de nuevo usuario");
    history.push("/new");
  };

  useEffect(() => {
    usersServices().then((resp) => setUsers([...resp.users]));
  }, []);

  console.log(users);

    return (
      <div className="box">
        <div className="content-table">
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
                <tr key={user.id}>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.cedula}</td>
                  <td>{user.correo}</td>
                  <td>{user.telefono}</td>
                  <td>
                    <button className="btn-table" onClick={() => handleUpdate(user.id)}>
                      <EditOutlined />
                    </button>
                    <button className="btn-table" onClick={() => handleDelete(user.id)}>
                      <DeleteOutlined />
                    </button>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <td>Juan</td>
                <td>Perez</td>
                <td>1234556789</td>
                <td>email2@email.com</td>
                <td>2344322345</td>
                <td>
                  <button className="btn-table" onClick={handleUpdate}>
                    <EditOutlined />
                  </button>
                  <button className="btn-table" onClick={handleDelete}>
                    <DeleteOutlined />
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
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
