import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      numberDocument,
      name,
      typeDocument,
      lastname,
      state,
      age,
      height,
      nationality,
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    console.log("Body ; ", request.body);

    await createUserUseCase.execute({
      numberDocument,
      name,
      typeDocument,
      lastname,
      state,
      age,
      height,
      nationality,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
