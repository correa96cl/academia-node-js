import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/implemantations/IUsersRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();
    console.log("Users2 : ", users);
    return users;
  }
}

export { ListUsersUseCase };
