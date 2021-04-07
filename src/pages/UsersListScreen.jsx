import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

const UsersListScreen = () => {
    const history = useHistory();

    const handleUpdate = () => {
        console.log("Pagina de nuevo usuario");
        history.push("/update")
    };

    const handleDelete = () => {
        console.log("Pagina de nuevo usuario");
    };

    const handleAdd = () => {
        console.log("Pagina de nuevo usuario");
        history.push("/new")
    };

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
              <tr>
                <td>Alvaro</td>
                <td>Ruiz</td>
                <td>10000000</td>
                <td>email@email.com</td>
                <td>13017824932</td>
                <td>
                  <button className="btn-table" onClick={handleUpdate}>
                    <EditOutlined />
                  </button>
                  <button className="btn-table" onClick={handleDelete}>
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
              <tr>
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
              </tr>
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
