import { User } from "../model/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";


class PostgresUsersRepositories implements IUsersRepository {
    findByNumberDocumentTypeDocument(numberDocument: number, typeDocument: number): User | undefined{
        console.log(numberDocument);
        //throw new Error("Method not implemented.");
        return null;
    }


    findByNumberDocument(numberDocument: number): User {
        throw new Error("Method not implemented.");
    }
    list(): User[] {
        return null;
        //throw new Error("Method not implemented.");
    }
    create({numberDocument, typeDocument, name}: ICreateUserDTO):void  {
        //throw new Error("Method not implemented.");
    }

}


export {PostgresUsersRepositories}