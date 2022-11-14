import { Router } from "express";

import { AuthentificatorUserController } from "../modules/accounts/useCases/autentificator/AuthentificatorUserController";

const autheticateRoutes = Router();

const authenticateUserController = new AuthentificatorUserController();

autheticateRoutes.post("/sessions", authenticateUserController.handle);

export { autheticateRoutes };
