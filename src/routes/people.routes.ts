import { Router } from "express";

import { UserRepository } from "../repositories/UserRepository";
import { CreateUserService } from "../services/CreateUserService";

const peopleRoutes = Router();

const userRepository = new UserRepository();

peopleRoutes.post("/", (request, response) => {

  const { numberDocument, name, typeDocument } = request.body;

  const createUserService = new CreateUserService(userRepository);

  createUserService.execute({numberDocument, name, typeDocument})

  return response.status(201).send();
});


peopleRoutes.get("/", (request, response) => {

  const all = userRepository.list();

  return response.json(all);

})

export { peopleRoutes };
