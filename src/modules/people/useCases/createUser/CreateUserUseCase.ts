import "reflect-metadata";

import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/implemantations/IUsersRepository";

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
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
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
      await this.userRepository.findByNumberDocumentTypeDocument(
        numberDocument,
        typeDocument
      );

    if (userAlreadyExists) {
      throw new Error("User Alredy exists ");
    }

    this.userRepository.create({
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

export { CreateUserUseCase };
