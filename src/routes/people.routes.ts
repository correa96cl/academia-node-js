import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/people/useCases/createUser/CreateUserController";
import { importUserController } from "../modules/people/useCases/importUser";
import { listUsersController } from "../modules/people/useCases/listUser";

const peopleRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createUserController = new CreateUserController();
peopleRoutes.post("/", createUserController.handle);

peopleRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

peopleRoutes.post("/import", upload.single("file"), (request, response) => {
  return importUserController.handle(request, response);
});

export { peopleRoutes };
