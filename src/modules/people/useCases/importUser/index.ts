import { UserRepository } from "../../repositories/implemantations/UserRepository";
import { ImportUserController } from "./ImportUserController";
import { ImportUserUseCase } from "./ImportUserUseCase";

const usersRepository = new UserRepository();
const importUserUseCase = new ImportUserUseCase(usersRepository);
const importUserController = new ImportUserController(importUserUseCase);

export { importUserController };
