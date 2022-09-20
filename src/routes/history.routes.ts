import { Router } from "express";
import { createHistoriesController } from "../modules/people/useCases/createHistory";


const historyRoutes = Router();

historyRoutes.post("/", (request, response) => {
   return createHistoriesController.handle(request, response);
})

export {historyRoutes};