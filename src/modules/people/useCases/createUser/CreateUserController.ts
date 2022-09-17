import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {


    constructor(private createUserUseCase: CreateUserUseCase){

    }

handle(request: Request, response: Response): Response{
    const { numberDocument, name, typeDocument } = request.body;


  this.createUserUseCase.execute({numberDocument, name, typeDocument})

  return response.status(201).send();
}

}

export {CreateUserController};