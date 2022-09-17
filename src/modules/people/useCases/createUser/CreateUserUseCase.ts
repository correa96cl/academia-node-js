import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {
    name: string;
    numberDocument: number;
    typeDocument: number;
}

class CreateUserUseCase {
    constructor(private userRepository: IUsersRepository) {

    }

    execute({ name, numberDocument, typeDocument }: IRequest): void {

        const userAlreadyExists = this.userRepository.findByNumberDocumentTypeDocument(numberDocument, typeDocument);

        if (userAlreadyExists) {
            throw new Error("User Alredy exists ");
        }

        this.userRepository.create({ name, numberDocument, typeDocument });

    }



}


export { CreateUserUseCase };