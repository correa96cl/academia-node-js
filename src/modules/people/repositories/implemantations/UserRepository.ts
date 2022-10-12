import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";



class UserRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UserRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UserRepository{
        if (!UserRepository.INSTANCE){
            UserRepository.INSTANCE = new UserRepository();
        }

        return UserRepository.INSTANCE;
    }
    
    findByNumberDocument(numberDocument: number): User {

        
        throw new Error("Method not implemented.");
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

    findByNumberDocumentTypeDocument(numberDocument: number, typeDocument: number): User | undefined{
        const user = this.users.find((user) => user.numberDocument === numberDocument && user.typeDocument === typeDocument);

        return user;



    }
}

export { UserRepository }