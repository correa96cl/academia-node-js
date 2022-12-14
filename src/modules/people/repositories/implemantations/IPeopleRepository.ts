import { Person } from "../../entities/Person";

interface ICreatePersonDTO {
  name: string;
  numberDocument: number;
  typeDocument: number;
  nationality: number;
  state: number;
  lastname: string;
  age: number;
  height: number;
  country: number;
  province: number;
  city: number;
}

interface IPeopleRepository {
  findByNumberDocument(numberDocument: number): Promise<Person>;
  list(): Promise<Person[]>;
  create({
    numberDocument,
    typeDocument,
    name,
    nationality,
    state,
    lastname,
    age,
    height,
    country,
    province,
    city,
  }: ICreatePersonDTO): Promise<void>;
  findByNumberDocumentTypeDocument(
    numberDocument: number,
    typeDocument: number
  ): Promise<Person> | undefined;
}

export { IPeopleRepository, ICreatePersonDTO as ICreateUserDTO };
