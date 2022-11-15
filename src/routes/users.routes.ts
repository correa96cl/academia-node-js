import { Router } from "express";

import { ensureAuthentificated } from "../middlewares/ensureAuthentificate";
import { CreateUserController } from "../modules/accounts/useCases/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.use(ensureAuthentificated);
userRoutes.post("/", createUserController.handle);

export { userRoutes };
