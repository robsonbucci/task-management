import { PrismaClient } from "@prisma/client";

interface Task {
  title: string;
  description: string;
  completed?: boolean;
}

interface User {
  name: string;
  email: string;
  password: string;
}
const prisma = new PrismaClient();

export async function createTask(task: Task) {
  await prisma.todo.create({
    data: {
      title: task.title,
      description: task.description,
    }
  });
}