import { Response, Request } from "express";
import db from "../database/connection";

export default class PetsControllers {
  async show(req: Request, res: Response) {
    const pets = await db("pets").select("*");

    return res.send();
  }

  async create(req: Request, res: Response) {
    const { type, name, age, features, user_id } = req.body;

    await db("pets").insert({
      type,
      name,
      age,
      features,
      user_id,
    });

    return res.send();
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const findUser = await db("pets").where({ id: id }).del();

    if (!findUser) return res.send("Animal não encontrado");

    return res.send(`Animal deletado`);
  }
}
