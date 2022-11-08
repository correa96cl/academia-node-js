import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePeopleUseCase } from "./CreatePeopleUseCase";

class CreatePeopleController {
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
      country,
      province,
      city,
    } = request.body;

    const createPersonUseCase = container.resolve(CreatePeopleUseCase);
    console.log("Body ; ", request.body);

    await createPersonUseCase.execute({
      numberDocument,
      name,
      typeDocument,
      lastname,
      state,
      age,
      height,
      nationality,
      country,
      province,
      city,
    });

    return response.status(201).send();
  }
}

export { CreatePeopleController };
