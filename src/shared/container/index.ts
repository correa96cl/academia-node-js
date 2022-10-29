import { container } from "tsyringe";

import { HistoryRepository } from "../../modules/people/repositories/HistoryRepository";
import { IHistoryRepository } from "../../modules/people/repositories/IHistoryRepository";
import { IUsersRepository } from "../../modules/people/repositories/implemantations/IUsersRepository";
import { UserRepository } from "../../modules/people/repositories/implemantations/UserRepository";

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);

container.registerSingleton<IHistoryRepository>(
  "HistoryRepository",
  HistoryRepository
);
