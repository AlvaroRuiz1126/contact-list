import React, { useContext, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router';
import { usersServices } from '../services/userAPI';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const UserEditScreen = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    telefono: ''
  });
  const {users} = useContext(UserContext);
  const {id} = useParams();
  const history = useHistory();
  const user = users.filter(user => user.id === id);

  const handleInputChange = ({target}) => {
    setForm({
      ...form,
      [target.name]: target.value
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleBack = () => {
    history.push("/");
  };

  const handleSubmit = (e) => {
    usersServices(id, form, "PUT").then(resp => {
      if(resp.ok){
        Swal.fire('Hecho!', resp.msg, 'success')
      }else{
        Swal.fire('Error!', resp.msg, 'error')
      }
    });
  };
  
  return (
    <>
      {user.length > 0 &&
        user.map((field) => (
          <div className="box">
            <div>
              <button className="btn-back" onClick={handleBack}>
                <ArrowLeftOutlined />
              </button>
            </div>
            <h2 style={{ textAlign: "center" }}>Editar usuario</h2>
            <p>
              Los campos con <span className="important">*</span> estan marcados
              como obligatorios
            </p>

            <Form
              {...layout}
              name="basic"
              initialValues={{
                nombre: field.nombre,
                apellido: field.apellido,
                cedula: field.cedula,
                correo: field.correo,
                telefono: field.telefono,
              }}
              //onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Nombre"
                name="nombre"
                rules={[
                  {
                    required: true,
                    message: "Ingrese su nombre",
                  },
                ]}
              >
                <Input className="input" onChange={handleInputChange} value={form.nombre} name="nombre" />
              </Form.Item>

              <Form.Item
                label="Apellido"
                name="apellido"
                rules={[
                  {
                    required: true,
                    message: "Ingrese su apellido",
                  },
                ]}
              >
                <Input className="input" onChange={handleInputChange} value={form.apellido} name="apellido" />
              </Form.Item>

              <Form.Item
                label="Cédula"
                name="cedula"
                rules={[
                  {
                    required: true,
                    message: "Ingrese su número de cédula",
                  },
                ]}
              >
                <Input className="input" type="number" onChange={handleInputChange} value={form.cedula} name="cedula" />
              </Form.Item>

              <Form.Item
                name="correo"
                label="Correo"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Ingrese un correo electrónico válido",
                  },
                ]}
              >
                <Input className="input" type="email" onChange={handleInputChange} value={form.correo} name="correo" />
              </Form.Item>

              <Form.Item
                label="Teléfono"
                name="telefono"
                rules={[
                  {
                    required: true,
                    message: "Ingrese su número de teléfono",
                  },
                ]}
              >
                <Input className="input" type="number" onChange={handleInputChange} value={form.telefono} name="telefono" />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  onClick={handleSubmit}
                >
                  Actualizar
                </Button>
              </Form.Item>
            </Form>
          </div>
        ))}
    </>
  );
};

export default UserEditScreen;
