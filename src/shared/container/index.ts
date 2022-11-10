import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/entities/repositories/implementations/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/entities/repositories/implementations/UsersRepository";
import { HistoryRepository } from "../../modules/people/repositories/HistoryRepository";
import { IHistoryRepository } from "../../modules/people/repositories/IHistoryRepository";
import { IPeopleRepository } from "../../modules/people/repositories/implemantations/IPeopleRepository";
import { PeopleRepository } from "../../modules/people/repositories/implemantations/PeopleRepository";

container.registerSingleton<IPeopleRepository>(
  "PeopleRepository",
  PeopleRepository
);

container.registerSingleton<IHistoryRepository>(
  "HistoryRepository",
  HistoryRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
