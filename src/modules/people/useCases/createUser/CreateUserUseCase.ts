import "reflect-metadata";

import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/implemantations/IUsersRepository";

interface IRequest {
  name: string;
  numberDocument: number;
  typeDocument: number;
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
  }: IRequest): Promise<void> {
    const userAlreadyExists =
      await this.userRepository.findByNumberDocumentTypeDocument(
        numberDocument,
        typeDocument
      );

    if (userAlreadyExists) {
      throw new Error("User Alredy exists ");
    }

    this.userRepository.create({ name, numberDocument, typeDocument });
  }
}

export { CreateUserUseCase };
