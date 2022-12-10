import { Router } from "express";
import ensureAuthenticated from "@shared/infra/http/middlewares/ensure-authenticated";
import AnimalController from "@modules/animals/infra/http/controllers/animal.controller";

const animalRouter = Router();
const animalController = new AnimalController();

animalRouter.use(ensureAuthenticated);

animalRouter.post("/animal", animalController.create);
animalRouter.get("/animal", animalController.show);
animalRouter.get("/animal/:id", animalController.getOne);
animalRouter.put("/animal/:id", animalController.edit);
animalRouter.delete("/animal/:id", animalController.delete);

export default animalRouter;
