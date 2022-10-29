import { Router } from "express";

import { CreateHistoryController } from "../modules/people/useCases/createHistory/CreateHistoryController";

const historyRoutes = Router();

const createHistoriesController = new CreateHistoryController();

historyRoutes.post("/", createHistoriesController.handle);

export { historyRoutes };
