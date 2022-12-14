import { inject } from "tsyringe";

import { IUsersRepository } from "../../entities/repositories/implementations/IUsersRepository";

interface IRequest {
  user_id: string;
  avatarFile: string;
}

class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ user_id, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
