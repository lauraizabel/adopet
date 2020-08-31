import { Response, Request } from "express";
import db from "../database/connection";

export default class UsersController {
  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, city, uf, adress } = req.body;

    await db("users").insert({
      name,
      avatar,
      whatsapp,
      city,
      uf,
      adress,
    });

    return res.send();
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const findUser = await db("users").where({ id: id }).del();

    if (!findUser) return res.send("Usuário não encontrado");

    return res.send(`Usuário deletado`);
  }
}
