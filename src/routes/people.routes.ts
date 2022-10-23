import { Router } from "express";
import multer from "multer";

import createUserController from "../modules/people/useCases/createUser";
import { importUserController } from "../modules/people/useCases/importUser";
import { listUsersController } from "../modules/people/useCases/listUser";

const peopleRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

peopleRoutes.post("/", (request, response) => {
  return createUserController().handle(request, response);
});

peopleRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

peopleRoutes.post("/import", upload.single("file"), (request, response) => {
  return importUserController.handle(request, response);
});

export { peopleRoutes };
