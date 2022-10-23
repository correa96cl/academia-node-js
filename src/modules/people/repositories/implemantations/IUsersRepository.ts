import { User } from "../../entities/User";

interface ICreateUserDTO {
  name: string;
  numberDocument: number;
  typeDocument: number;
}

interface IUsersRepository {
  findByNumberDocument(numberDocument: number): Promise<User>;
  list(): Promise<User[]>;
  create({ numberDocument, typeDocument, name }: ICreateUserDTO): Promise<void>;
  findByNumberDocumentTypeDocument(
    numberDocument: number,
    typeDocument: number
  ): Promise<User> | undefined;
}

export { IUsersRepository, ICreateUserDTO };
