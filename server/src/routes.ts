import express from "express";
import UsersController from "../src/controllers/UsersController";
import PetsControllers from "./controllers/PetsControllers";
import multer from "multer";
import multerConfig from "./config/multer";
import SessionsController from "./controllers/SessionsController";

const routes = express.Router();
const upload = multer(multerConfig);

const userController = new UsersController();
const petController = new PetsControllers();

routes.get("/users", userController.show); //ok
routes.post("/users", userController.create); //ok
routes.delete("/users/:id", userController.delete); //ok

routes.get("/pets", petController.show); //ok
routes.get("/pets/:id", petController.index); //ok
routes.post("/pets/create", upload.single("image"), petController.create); //ok
routes.delete("/pets/:id", petController.delete); //ok

routes.post("/auth", SessionsController.auth);

export default routes;
