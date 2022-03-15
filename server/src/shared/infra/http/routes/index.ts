import userRouter from "@modules/users/infra/http/routes/user.routes";
import { Router } from "express";

const routes = Router();

routes.use(userRouter);
routes.get("/", (req, res) => res.json({ msg: "hello" }));

export default routes;
