import { Router } from "express";
import multer from "multer";

import { CreatePeopleController } from "../modules/people/useCases/createUser/CreatePeopleController";
import { ImportUserController } from "../modules/people/useCases/importUser/ImportUserController";
import { ListPeopleController } from "../modules/people/useCases/listUser/ListPeopleController";
// import { importUserController } from "../modules/people/useCases/importUser";

const peopleRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createPeopleController = new CreatePeopleController();
const importUserController = new ImportUserController();
const listPeopleController = new ListPeopleController();
peopleRoutes.post("/", createPeopleController.handle);

peopleRoutes.get("/", listPeopleController.handle);

peopleRoutes.post(
  "/import",
  upload.single("file"),

  importUserController.handle
);

export { peopleRoutes };
