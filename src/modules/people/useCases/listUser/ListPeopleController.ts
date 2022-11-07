import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPeopleUseCase } from "./ListPeopleUseCase";

class ListPeopleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPeopleUseCase = container.resolve(ListPeopleUseCase);

    const all = await listPeopleUseCase.execute();

    return response.json(all);
  }
}

export { ListPeopleController };
