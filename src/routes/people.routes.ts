import { Router } from "express";

import { createUserController } from "../modules/people/useCases/createUser";
import { listUsersController } from "../modules/people/useCases/listUser";

const peopleRoutes = Router();


peopleRoutes.post("/", (request, response) => {
return createUserController.handle(request, response);
  
});


peopleRoutes.get("/", (request, response) => {

 return listUsersController.handle(request, response);

})

export { peopleRoutes };
