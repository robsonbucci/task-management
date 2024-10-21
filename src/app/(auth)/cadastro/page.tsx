"use client";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import LoginCard from "@/app/components/LoginCard/LoginCard";

export default function Cadastro() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await fetch("/api/auth/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      setCookie("authorization", data);
      router.push("/");
    } catch (error) {
      setError("Erro ao realizar o cadastro. Tente novamente!");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    setError("Erro ao realizar o cadastro. Tente novamente!");
  };

  return (
    <LoginCard title="Crie sua Conta">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        {/* Campo para Nome */}
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Insira seu nome!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Seu nome" />
        </Form.Item>

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

        {/* Campo para Confirmar Senha */}
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Confirme sua senha!",
            },
            ({ getFieldValue }) => ({
              // Logica para validar confirmação de senha
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("As duas senhas não são iguais!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirme sua senha"
          />
        </Form.Item>

        {/* Botão de Cadastro */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Cadastrar
          </Button>
        </Form.Item>

        {error && <p className="text-red-500">{error}</p>}

        {/* Link para Login */}
        <Form.Item style={{ color: "#e5e7eb" }}>
          <Link href="/login">Já possui conta?</Link>
        </Form.Item>
      </Form>
    </LoginCard>
  );
}
