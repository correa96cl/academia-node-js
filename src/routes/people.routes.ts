import { Router } from "express";

import { UserRepository } from "../repositories/UserRepository";

const peopleRoutes = Router();

const userRepository = new UserRepository();

peopleRoutes.post("/", (request, response) => {

  const { numberDocument, name, typeDocument } = request.body;

  const userAlreadyExists = userRepository.findByNumberDocumentTypeDocument(numberDocument, typeDocument);

  if (userAlreadyExists) {
    return response.status(400).json({ error: "User Alredy" });
  }

  userRepository.create({ name, numberDocument, typeDocument });

  return response.status(201).send();
});


peopleRoutes.get("/", (request, response) => {

  const all = userRepository.list();

  return response.json(all);

})

export { peopleRoutes };
