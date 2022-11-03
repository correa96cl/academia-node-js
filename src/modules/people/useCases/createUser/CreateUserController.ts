import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { numberDocument, name, typeDocument } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      numberDocument,
      name,
      typeDocument,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
