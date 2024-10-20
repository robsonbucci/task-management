"use client";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

import LoginCard from "@/app/components/LoginCard/LoginCard";
import { useGlobalState } from "@/app/context/globalContextProvider";

export default function Login() {
  const { theme } = useGlobalState();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <LoginCard title="Entre em sua Conta">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        {/* Campo para E-mail */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Insira seu e-mail!" },
            { type: "email", message: "O formato do e-mail é inválido!" }, // Validação de formato de e-mail
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Seu e-mail" />
        </Form.Item>

        {/* Campo para Senha */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Insira sua senha!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Sua senha" />
        </Form.Item>

        {/* Botão de Cadastro */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Entrar
          </Button>
        </Form.Item>

        {/* Link para cadastro */}
        <Form.Item style={{ color: theme.colorFontPrimary }}>
          <Link href="/cadastro">Ainda não possui uma conta?</Link>
        </Form.Item>
      </Form>
    </LoginCard>
  );
}
