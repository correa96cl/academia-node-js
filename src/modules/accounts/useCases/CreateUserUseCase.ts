import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../entities/repositories/implementations/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    state,
  }: ICreateUserDTO): Promise<void> {
    console.log("state : ", state);
    await this.userRepository.create({
      name,
      username,
      email,
      password,
      state,
    });
  }
}

export { CreateUserUseCase };
