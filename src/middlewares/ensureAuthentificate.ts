import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
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
  console.log("authHeader : ", authHeader);

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "") as IPayLoad;

    const userRepository = new UsersRepository();

    const userExists = userRepository.findById(user_id);

    if (!userExists) {
      throw new AppError("User does not exists", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid Token!", 401);
  }
}
