import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthentificated } from "../middlewares/ensureAuthentificate";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const userRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateAvatarController = new UpdateUserAvatarController();

userRoutes.use(ensureAuthentificated);
userRoutes.post("/", createUserController.handle);

userRoutes.patch(
  "/avatar",
  ensureAuthentificated,
  uploadAvatar.single("avatar"),
  updateAvatarController.handle
);

export { userRoutes };
