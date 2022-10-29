import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  handle(request: Request, response: Response): Response {
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const all = listUsersUseCase.execute();

    return response.json(all);
  }
}

export { ListUsersController };
