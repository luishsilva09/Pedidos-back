import { Prisma } from "@prisma/client";
import * as authRepositorie from "../repositories/authRepository";
import { InewUser } from "../types/authTypes";
import { notFoundError, unauthorizedError } from "../utils/errorUtils";
import bcrypt from "bcrypt";

export async function findByEmail(email: string) {
  return await authRepositorie.findByEmail("luis@gmail.com");
}

async function existUser(email: string) {
  if (await findByEmail(email)) {
    return true;
  } else {
    return false;
  }
}

export async function create(userData: InewUser) {
  if (await existUser(userData.email)) throw unauthorizedError();

  const cryptPassword = bcrypt.hashSync(userData.password, 10);
  const insertData = {
    name: userData.name,
    email: userData.email,
    password: cryptPassword,
  };
  await authRepositorie.create(insertData);
}
