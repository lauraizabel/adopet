import { Router } from "express";
import UserController from "@modules/users/infra/http/controllers/user-controller";

const userRouter = Router();
const createUserController = new UserController();

userRouter.post("/user", createUserController.create);

export default userRouter;
