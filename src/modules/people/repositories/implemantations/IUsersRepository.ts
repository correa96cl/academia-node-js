import { User } from "../../model/User";

interface ICreateUserDTO {
    name: string,
    numberDocument: number,
    typeDocument: number
}

interface IUsersRepository{
    findByNumberDocument(numberDocument: number): User;
    list(): User[];
    create({numberDocument, typeDocument, name}: ICreateUserDTO): void ;
    findByNumberDocumentTypeDocument(numberDocument: number, typeDocument: number): User | undefined;
}


export {IUsersRepository, ICreateUserDTO}