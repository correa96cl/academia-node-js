import { UserRepository } from "../../repositories/UserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const usersRepository =  UserRepository.getInstance();
const listUsersUseCase = new ListUsersUseCase(usersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export {listUsersController}