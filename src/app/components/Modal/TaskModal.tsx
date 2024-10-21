import { Form, Input, Modal } from "antd";
import React from "react";

export default function TaskModal({
  isModalVisible,
  form,
  handleOk,
  handleCancel,
}: any) {
  return (
    <Modal
      title="Criar Tarefa"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Salvar"
      cancelText="Cancelar"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true, message: "Por favor, insira o título!" }]}
        >
          <Input placeholder="Título da tarefa" />
        </Form.Item>
        <Form.Item
          label="Descrição"
          name="description"
          rules={[
            { required: true, message: "Por favor, insira a descrição!" },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Descrição da tarefa" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
