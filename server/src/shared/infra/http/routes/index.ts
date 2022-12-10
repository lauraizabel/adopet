import animalRouter from "@modules/animals/infra/http/routes/animals.routes";
import userRouter from "@modules/users/infra/http/routes/user.routes";
import { Router } from "express";

const routes = Router();

routes.use(userRouter);
routes.use(animalRouter);

routes.get("/", (req, res) => res.json({ msg: "hello" }));

export default routes;
