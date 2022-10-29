import "reflect-metadata";

import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportUserUseCase } from "./ImportUserUseCase";

class ImportUserController {
  handle(request: Request, response: Response): Response {
    const { file } = request;

    const importUserUseCase = container.resolve(ImportUserUseCase);

    importUserUseCase.execute(file);

    return response.send();
  }
}

export { ImportUserController };
