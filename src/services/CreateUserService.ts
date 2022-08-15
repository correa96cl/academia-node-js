import { UserRepository } from "../repositories/UserRepository";


interface IRequest {
    name: string;
    numberDocument: number;
    typeDocument: number;
}

class CreateUserService {
    constructor(private userRepository: UserRepository) {

    }

    execute({ name, numberDocument, typeDocument }: IRequest): void {

        const userAlreadyExists = this.userRepository.findByNumberDocumentTypeDocument(numberDocument, typeDocument);

        if (userAlreadyExists) {
            throw new Error("User Alredy exists ");
        }

        this.userRepository.create({ name, numberDocument, typeDocument });

    }



}


export { CreateUserService }