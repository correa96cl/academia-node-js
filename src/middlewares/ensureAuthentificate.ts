import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/entities/repositories/implementations/UsersRepository";

interface IPayLoad {
  sub: string;
}

export async function ensureAuthentificated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "") as IPayLoad;

    const userRepository = new UsersRepository();

    const userExists = userRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User does not exists");
    }
    next();
  } catch {
    throw new Error("Invalid Token!");
  }
}
