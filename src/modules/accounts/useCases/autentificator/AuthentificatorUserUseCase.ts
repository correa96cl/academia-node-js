import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../entities/repositories/implementations/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthentificatorUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    console.log("User 1 : ", user);

    if (!user) {
      throw new Error("Email or password incorrect !");
    }

    const passwordMatch = await compare(password, user.password);

    console.log("User 2 : ", passwordMatch);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect !");
    }

    const token = sign({}, "ff", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.email,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthentificatorUserUseCase };
