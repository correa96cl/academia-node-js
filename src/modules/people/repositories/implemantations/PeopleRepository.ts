import { getRepository, Repository } from "typeorm";

import { AppError } from "../../../../errors/AppError";
import { Person } from "../../entities/Person";
import {
  ICreateUserDTO as IcreatePeopleDTO,
  IPeopleRepository,
} from "./IPeopleRepository";

class PeopleRepository implements IPeopleRepository {
  private repository: Repository<Person>;

  constructor() {
    this.repository = getRepository(Person);
  }

  findByNumberDocument(numberDocument: number): Promise<Person> {
    throw new AppError("Method not implemented.", 401);
  }

  async create({
    name,
    numberDocument,
    typeDocument,
    nationality,
    state,
    lastname,
    age,
    height,
    country,
    province,
    city,
  }: IcreatePeopleDTO): Promise<void> {
    const user = this.repository.create({
      name,
      numberDocument,
      typeDocument,
      nationality,
      state,
      lastname,
      age,
      height,
      country,
      province,
      city,
    });

    await this.repository.save(user);
  }

  async list(): Promise<Person[]> {
    const users = await this.repository.find();
    console.log("Users : ", users);
    return users;
  }

  async findByNumberDocumentTypeDocument(
    numberDocument: number,
    typeDocument: number
  ): Promise<Person> | undefined {
    const user = await this.repository.findOne({
      numberDocument,
      typeDocument,
    });

    return user;
  }
}

export { PeopleRepository };
