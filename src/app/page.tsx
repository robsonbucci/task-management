"use client";
import React, { useState } from "react";
import { Button, Form } from "antd";
import TaskModal from "./components/Modal/TaskModal";
import CardTask from "@/app/components/Task/CardTask";

interface Task {
  title: string;
  description: string;
  completed?: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      title: "Tarefa 1",
      description: "Descricão da tarefa 1",
      completed: false,
    },
    {
      title: "Tarefa 2",
      description: "Descricão da tarefa 2",
      completed: true,
    },
    {
      title: "Tarefa 3",
      description: "Descricão da tarefa 3",
      completed: false,
    },
    {
      title: "Tarefa 4",
      description: "Descricão da tarefa 4",
      completed: true,
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log("Valores da tarefa:", values);

      // Atualiza o estado das tarefas
      setTasks((prevTasks) => [...prevTasks, values]);

      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.log("Erro ao validar:", error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Função para marcar como concluído
  const toggleCompleted = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex h-screen">
      {/* Conteúdo principal */}
      <div style={{ padding: "20px", flex: 1 }}>
        <Button type="primary" onClick={showModal}>
          Criar Tarefa
        </Button>

        <TaskModal
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          form={form}
        />

        {/* Estilos para organizar os cards em linhas */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {tasks.map((task, index) => (
            <CardTask key={index} task={task} index={index} toggleCompleted={toggleCompleted} />
          ))}
        </div>
      </div>
    </div>
  );
}
