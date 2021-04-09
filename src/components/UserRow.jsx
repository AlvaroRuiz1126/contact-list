import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { usersServices } from '../services/userAPI';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

const UserRow = ({ user }) => {
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
        usersServices(id, {}, "DELETE").then((resp) => {
          Swal.fire("Eliminado!", resp.msg, "success");
          window.location.reload();
        });
      }
    });
  };

  return (
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
  );
};

export default UserRow;
