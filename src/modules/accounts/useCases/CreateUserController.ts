import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log(" Body 2: ", request.body);
    const { username, password, email, name, state } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ username, password, email, name, state });

    return response.status(201).send();
  }
}

export { CreateUserController };
