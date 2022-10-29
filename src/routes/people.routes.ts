import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/people/useCases/createUser/CreateUserController";
import { ImportUserController } from "../modules/people/useCases/importUser/ImportUserController";
import { ListUsersController } from "../modules/people/useCases/listUser/ListUsersController";
// import { importUserController } from "../modules/people/useCases/importUser";

const peopleRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createUserController = new CreateUserController();
const importUserController = new ImportUserController();
const listUsersController = new ListUsersController();
peopleRoutes.post("/", createUserController.handle);

peopleRoutes.get("/", listUsersController.handle);

peopleRoutes.post(
  "/import",
  upload.single("file"),
  importUserController.handle
);

export { peopleRoutes };
