import { Button, Card } from "antd";
import { CheckOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function TaskCard({
  task,
  index,
  toggleCompleted,
  editTask,
  deleteTask,
}: any) {
  return (
    <Card
      key={index}
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </span>
          {/* Ícone de edição ao lado direito do título */}
          <EditOutlined
            onClick={() => editTask(index)}
            style={{ cursor: "pointer" }}
          />
        </div>
      }
      bordered={false}
      style={{
        width: 300,
        backgroundColor: task.completed ? "#d9f7be" : "#fff",
      }}
    >
      <p>{task.description}</p>
      <div className="flex justify-between mt-4">
        {/* Botão de concluir no lado direito */}
        <Button
          type="primary"
          icon={<CheckOutlined />}
          onClick={() => toggleCompleted(index)}
        >
          {task.completed ? "Concluído" : "Finalizar"}
        </Button>

        {/* Botão de excluir no lado esquerdo */}
        <Button
          type="default"
          icon={<DeleteOutlined />}
          onClick={() => deleteTask(index)}
          danger
        >
          Excluir
        </Button>
      </div>
    </Card>
  );
}
