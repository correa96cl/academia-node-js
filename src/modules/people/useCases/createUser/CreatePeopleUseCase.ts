import "reflect-metadata";

import { inject, injectable } from "tsyringe";

import { IPeopleRepository } from "../../repositories/implemantations/IPeopleRepository";

interface IRequest {
  name: string;
  numberDocument: number;
  typeDocument: number;
  nationality: number;
  state: number;
  lastname: string;
  age: number;
  height: number;
}

@injectable()
class CreatePeopleUseCase {
  constructor(
    @inject("PeopleRepository")
    private personRepository: IPeopleRepository
  ) {}

  async execute({
    name,
    numberDocument,
    typeDocument,
    nationality,
    state,
    lastname,
    age,
    height,
  }: IRequest): Promise<void> {
    const userAlreadyExists =
      await this.personRepository.findByNumberDocumentTypeDocument(
        numberDocument,
        typeDocument
      );

    if (userAlreadyExists) {
      throw new Error("User Alredy exists ");
    }

    this.personRepository.create({
      name,
      numberDocument,
      typeDocument,
      nationality,
      state,
      lastname,
      age,
      height,
    });
  }
}

export { CreatePeopleUseCase };
