import React, { useContext, useEffect } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { usersServices } from '../services/userAPI';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2';

const UsersListScreen = () => {
  const { users, setUsers } = useContext(UserContext);
  const history = useHistory();

  const handleUpdate = (id) => {
    history.push(`/update/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro que deseas eliminarlo?",
      text: "No se podrá revertir este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        usersServices(id, {}, "DELETE").then((resp) =>
          Swal.fire("Eliminado!", resp.msg, "success")
        );
      }
    });
  };

  const handleAdd = () => {
    history.push("/new");
  };

  useEffect(() => {
    usersServices().then((resp) => setUsers([...resp.users]));
  }, []);

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
                  <button
                    className="btn-table"
                    onClick={() => handleUpdate(user.id)}
                  >
                    <EditOutlined />
                  </button>
                  <button
                    className="btn-table"
                    onClick={() => handleDelete(user.id)}
                  >
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            ))}
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
