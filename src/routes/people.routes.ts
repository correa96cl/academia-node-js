import { Router } from "express";

import { UserRepository } from "../modules/people/repositories/UserRepository";
import { createUserController } from "../modules/people/useCases/createUser";

const peopleRoutes = Router();

const userRepository = new UserRepository();

peopleRoutes.post("/", (request, response) => {
return createUserController.handle(request, response);
  
});


peopleRoutes.get("/", (request, response) => {

  const all = userRepository.list();

  return response.json(all);

})

export { peopleRoutes };
