"use client";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import LoginCard from "@/app/components/LoginCard/LoginCard";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const token = await response.json();
      setCookie("authorization", token);
      router.push("/");
    } catch (error) {
      setError("Erro ao realizar o login. Tente novamente");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    setError("Erro ao realizar o login. Tente novamente");
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
            { type: "email", message: "O formato do e-mail é inválido!" },
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

        {error && <p className="text-red-500">{error}</p>}

        {/* Link para cadastro */}
        <Form.Item style={{ color: "#6c7983"}}>
          <Link href="/cadastro">Ainda não possui uma conta?</Link>
        </Form.Item>
      </Form>
    </LoginCard>
  );
}
