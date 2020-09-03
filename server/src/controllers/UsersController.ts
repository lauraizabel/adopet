import { Response, Request } from "express";
import db from "../database/connection";
import { hash } from "bcryptjs";

export default class UsersController {
  async show(req: Request, res: Response) {
    const users = await db("users").select("*");

    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const { name, email, password, whatsapp, city, uf } = req.body;

    const user = {
      name,
      email,
      password,
      whatsapp,
      city,
      uf,
    };

    const hashedPassword = await hash(user.password, 8);

    await db("users").insert({
      name,
      email,
      password: hashedPassword,
      whatsapp,
      city,
      uf,
    });

    delete user.password;
    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const findUser = await db("users").where({ id: id }).del();

    if (!findUser) return res.send("Usuário não encontrado");

    return res.send(`Usuário deletado`);
  }
}
