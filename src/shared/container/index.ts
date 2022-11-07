import { container } from "tsyringe";

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
