import jwt from "jsonwebtoken";

import errorHandler from "@/utils/errorHandler";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

let users: User[] = [];
const SECRET: any = process.env.JWT_SECRET;

function createToken(user: User) {
  return jwt.sign({ email: user.email, name: user.name }, SECRET);
}

function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    throw new Error("Token inválido");
  }
}

export function cadastroUser(userData: User) {
  const user = users.find((user) => user.email === userData.email);
  if (user) {
    throw errorHandler(409, "Usuario já cadastrado!");
  }

  users.push(userData);
  const token = createToken(userData);
  return token;
}

export function loginUser(userData: Partial<Pick<User, "email" | "password">>) {
  const user = users.find(
    (user) =>
      user.email === userData.email && user.password === userData.password
  );

  if (!user) {
    throw errorHandler(404, "Usuario não encontrado!");
  }

  if (user.password !== userData.password) {
    throw errorHandler(401, "Usuario ou senha incorretos!");
  }

  const token = createToken(user);
  return token;
}
