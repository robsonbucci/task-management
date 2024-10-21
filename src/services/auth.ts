import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

import errorHandler from "@/utils/errorHandler";

interface User {
  name: string;
  email: string;
  password: string;
}

const prisma = new PrismaClient();
const SECRET: any = process.env.JWT_SECRET;

function createToken(user: User) {
  return jwt.sign({ email: user.email, name: user.name }, SECRET, {
    expiresIn: "1h",
  });
}

function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return false;
  }
}

export function validateToken(token: string) {
  const user = verifyToken(token);
  return user;
}

export async function cadastroUser(userData: User) {
  const user = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (user) {
    throw errorHandler(409, "Usuario já cadastrado!");
  }

  // Criptografar a senha antes de salvar
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // Salvar o usuario com a senha criptografada
  const newUser = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    },
  });

  const token = createToken(userData);
  return token;
}

export async function loginUser(
  userData: Partial<Pick<User, "email" | "password">>
) {
  const user = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (!user) {
    throw errorHandler(404, "Usuario não encontrado!");
  }

  const isPasswordValid = await bcrypt.compare(
    userData.password!,
    user.password
  );

  if (!isPasswordValid) {
    throw errorHandler(401, "Usuario ou senha incorretos!");
  }

  const token = createToken(user);
  return token;
}
