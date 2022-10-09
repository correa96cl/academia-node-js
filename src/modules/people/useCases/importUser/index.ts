import { UserRepository } from "../../repositories/implemantations/UserRepository";
import { ImportUserController } from "./ImportUserController";
import { ImportUserUseCase } from "./ImportUserUseCase";

const usersRepository = UserRepository.getInstance();
const importUserUseCase = new ImportUserUseCase(usersRepository);
const importUserController = new ImportUserController(importUserUseCase);


export {importUserController};