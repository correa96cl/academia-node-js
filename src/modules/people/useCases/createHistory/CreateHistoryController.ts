import "reflect-metadata";

import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateHistoryUseCase } from "./CreateHistoryUseCase";

class CreateHistoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, weight, fat_percentage } = request.body;
    const createHistoryUseCase = container.resolve(CreateHistoryUseCase);
    await createHistoryUseCase.execute({ description, weight, fat_percentage });

    return response.status(201).send();
  }
}

export { CreateHistoryController };
