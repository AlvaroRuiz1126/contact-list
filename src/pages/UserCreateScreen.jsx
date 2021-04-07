import React, { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { UserContext } from '../context/UserContext';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

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
  const {newUser, setNewUser} = useContext(UserContext);

  const onFinish = (values) => {
    const { nombre, apellido, cedula, email, telefono } = values;
    setNewUser({nombre, apellido, cedula, email, telefono});
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleBack = () => {
    history.push("/");
  };

  console.log(newUser);

  return (
    <>
      <div className="box">
        <div><button className="btn-back" onClick={handleBack}><ArrowLeftOutlined /></button></div>

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
          onFinish={onFinish}
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
            <Input className="input" />
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
            <Input className="input" />
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
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Correo"
            rules={[
              {
                type: "email",
                required: true,
                message: "Ingrese un correo electrónico válido",
              },
            ]}
          >
            <Input className="input" />
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
            <Input className="input" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" shape="round">
              Crear Usuario
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UserCreateScreen;