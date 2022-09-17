import { Router } from "express";
import { HistoryRepository } from "../modules/people/repositories/HistoryRepository";
import { CreateHistoryService } from "../modules/people/services/CreateHistoryService";


const historyRoutes = Router();

const historyRepository = new HistoryRepository();

historyRoutes.post("/", (request, response) => {
    const {description, weight, fat_percentage} = request.body;
    const createHistorySpecificationService = new CreateHistoryService(historyRepository);

    createHistorySpecificationService.execute({description, weight, fat_percentage});

    return response.status(201).send();
})

export {historyRoutes};