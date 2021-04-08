import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { usersServices } from '../services/userAPI';
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

const UserCreateScreen = () => {
  const history = useHistory();
  const [form, setForm] = useState({ 
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    telefono: ''
  });

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

  const handleSubmit = () => {
    usersServices("new", form, "POST").then(resp => {
      if(resp.ok){
        Swal.fire('Hecho!', resp.msg, 'success')
      }else{
        Swal.fire('Error!', resp.msg, 'error')
      }
    });
  };

  console.log(form);

  return (
    <>
      <div className="box">
        <div>
          <button className="btn-back" onClick={handleBack}>
            <ArrowLeftOutlined />
          </button>
        </div>

        <h2 style={{ textAlign: "center" }}>Crear un nuevo usuario</h2>

        <p>
          Los campos con <span className="important">*</span> estan marcados
          como obligatorios
        </p>

        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
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
            <Input className="input" name="nombre" onChange={handleInputChange} value={form.nombre} />
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
            <Input className="input" name="apellido" onChange={handleInputChange} value={form.apellido} />
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
            <Input className="input" type="number" name="cedula" onChange={handleInputChange} value={form.cedula} />
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
            <Input className="input" type="email" name="correo" onChange={handleInputChange} value={form.correo} />
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
            <Input className="input" type="number" name="telefono" onChange={handleInputChange} value={form.telefono} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" shape="round" onClick={handleSubmit}>
              Crear Usuario
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UserCreateScreen;