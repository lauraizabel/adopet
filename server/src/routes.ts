import express from "express";
import UsersController from "../src/controllers/UsersController";
import PetsControllers from "./controllers/PetsControllers";

const routes = express.Router();

const userController = new UsersController();
const petController = new PetsControllers();

routes.post("/users", userController.create); //ok
routes.delete("/users/:id", userController.delete); //ok

routes.get("/pets", petController.show); //ok
routes.post("/pets/create", petController.create); //ok
routes.delete("/pets/:id", petController.delete); //ok

export default routes;
