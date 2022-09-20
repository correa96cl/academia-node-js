import { Request, Response } from "express";
import { CreateHistoryUseCase } from "./CreateHistoryUseCase";

class CreateHistoryController {

    constructor(private createHistoryUseCase: CreateHistoryUseCase) { }

    handle(request: Request, response: Response): Response {


        const { description, weight, fat_percentage } = request.body;


        this.createHistoryUseCase.execute({ description, weight, fat_percentage });

        return response.status(201).send();
    }

}

export { CreateHistoryController }