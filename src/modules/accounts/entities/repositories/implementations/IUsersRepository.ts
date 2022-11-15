import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../../User";

interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<void>;
  findById(user_id: string): Promise<User>;
}

export { IUsersRepository };
