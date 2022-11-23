import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatarFile = request.file.filename;

    const updateUserAvatarUseeCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseeCase.execute({ user_id: id, avatarFile });

    return response.status(200).send();
  }
}

export { UpdateUserAvatarController };
