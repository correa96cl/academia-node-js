import { inject, injectable } from "tsyringe";

import { Person } from "../../entities/Person";
import { IPeopleRepository } from "../../repositories/implemantations/IPeopleRepository";

@injectable()
class ListPeopleUseCase {
  constructor(
    @inject("PeopleRepository")
    private peopleRepository: IPeopleRepository
  ) {}

  async execute(): Promise<Person[]> {
    const users = await this.peopleRepository.list();
    console.log("Users2 : ", users);
    return users;
  }
}

export { ListPeopleUseCase };
