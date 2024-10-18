"use client";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import Link from "next/link";
import LoginCard from "@/app/components/LoginCard/LoginCard";

export default function Cadastro() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <LoginCard title="Crie sua Conta">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        {/* Campo para Nome */}
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Por favor insira seu nome!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Seu nome" />
        </Form.Item>

        {/* Campo para E-mail */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Por favor insira seu e-mail!" },
            { type: "email", message: "O formato do e-mail é inválido!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Seu e-mail" />
        </Form.Item>

        {/* Campo para Senha */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Por favor insira sua senha!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Sua senha" />
        </Form.Item>

        {/* Botão de Cadastro */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Cadastrar
          </Button>
        </Form.Item>

        {/* Link para Login */}
        <Form.Item className="text-white">
          <Link href="/login">Já possui conta?</Link>
        </Form.Item>
      </Form>
    </LoginCard>
  );
}
