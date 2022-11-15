import { Router } from "express";
import ensureAuthenticated from "@shared/infra/http/middlewares/ensure-authenticated";

const animalRouter = Router();

animalRouter.use(ensureAuthenticated);

export default animalRouter;
