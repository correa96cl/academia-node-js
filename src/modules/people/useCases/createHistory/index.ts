import { HistoryRepository } from "../../repositories/HistoryRepository";
import { CreateHistoryController } from "./CreateHistoryController";
import { CreateHistoryUseCase } from "./CreateHistoryUseCase";

const historiesRepository = new HistoryRepository();

const historiesUseCase = new CreateHistoryUseCase(historiesRepository);

const createHistoriesController = new CreateHistoryController(historiesUseCase);

export { createHistoriesController };
