import { Router } from "express";
import multer from "multer";

import { ensureAuthentificated } from "../middlewares/ensureAuthentificate";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const userRoutes = Router();

const upload = multer({
  dest: "avatar",
});

const createUserController = new CreateUserController();
const updateAvatarController = new UpdateUserAvatarController();

userRoutes.use(ensureAuthentificated);
userRoutes.post("/", createUserController.handle);

userRoutes.patch("/avatar", updateAvatarController.handle);

export { userRoutes };
