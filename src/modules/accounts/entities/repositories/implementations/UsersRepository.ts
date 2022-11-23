import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../../User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  async findById(user_id: string): Promise<User> {
    const user = await this.repository.findOne(user_id);

    return user;
  }
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async create({
    email,
    password,
    state,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      password,
      state,
      avatar,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
