import { Router } from "express";
import UserController from "@modules/users/infra/http/controllers/user-controller";
import ensureAuthenticated from "../middlewares/ensure-authenticated";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/user", userController.create);
userRouter.post("/login", userController.login);

userRouter.use(ensureAuthenticated);

userRouter.put("/user", userController.edit);

export default userRouter;
