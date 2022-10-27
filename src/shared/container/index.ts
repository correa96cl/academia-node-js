import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/people/repositories/implemantations/IUsersRepository";
import { UserRepository } from "../../modules/people/repositories/implemantations/UserRepository";

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
