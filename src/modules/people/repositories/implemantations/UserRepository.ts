import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  findByNumberDocument(numberDocument: number): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async create({
    name,
    numberDocument,
    typeDocument,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      numberDocument,
      typeDocument,
    });

    await this.repository.save(user);
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByNumberDocumentTypeDocument(
    numberDocument: number,
    typeDocument: number
  ): Promise<User> | undefined {
    const user = await this.repository.findOne({
      numberDocument,
      typeDocument,
    });

    return user;
  }
}

export { UserRepository };
