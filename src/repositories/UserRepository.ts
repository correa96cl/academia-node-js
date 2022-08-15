import { User } from "../model/User";

interface ICreateUserDTO {
    name: string,
    numberDocument: number,
    typeDocument: number
}

class UserRepository {
    private users: User[];

    constructor() {
        this.users = [];
    }

    create({ name, numberDocument, typeDocument }: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            name,
            numberDocument,
            typeDocument,
            user: 1,
            created_at: new Date(),
            updated_at: new Date()
        })



        this.users.push(user);
    }

    list(): User[] {
        return this.users;

    }

    findByNumberDocumentTypeDocument(numberDocument: number, typeDocument: number): User{

        const user = this.users.find((user) => user.numberDocument === numberDocument && user.typeDocument === typeDocument);

        return user;



    }
}

export { UserRepository }