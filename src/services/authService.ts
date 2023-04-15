import { Prisma } from "@prisma/client";
import * as authRepositorie from "../repositories/authRepository";
import { InewUser, IsigninData } from "../types/authTypes";
import { notFoundError, unauthorizedError } from "../utils/errorUtils";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "";

export async function findByEmail(email: string) {
  return await authRepositorie.findByEmail(email);
}

export async function create(userData: InewUser) {
  if (await findByEmail(userData.email)) throw unauthorizedError();

  const cryptPassword = bcrypt.hashSync(userData.password, 10);
  const insertData = {
    name: userData.name,
    email: userData.email,
    password: cryptPassword,
  };
  await authRepositorie.create(insertData);
}

export async function signin(userData: IsigninData) {
  const user = await findByEmail(userData.email);
  if (!user) throw unauthorizedError();

  const confirmPassword = bcrypt.compareSync(userData.password, user.password);

  if (!confirmPassword) throw unauthorizedError();

  return JWT.sign(user, JWT_SECRET);
}
