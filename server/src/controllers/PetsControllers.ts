import { Response, Request } from "express";
import db from "../database/connection";
import { hash } from "bcrypt";

export default class PetsControllers {
  async show(req: Request, res: Response) {
    const pets = await db("pets").select("*");

    return res.json({ pets });
  }

  async index(req: Request, res: Response) {
    const { id } = req.params;

    const pet = await db("pets").where("id", id).first();

    if (!pet) return res.status(400).json({ message: "Pet não encontrado." });

    const serializedPet = {
      ...pet,
      image_url: `http://192.168.1.12/${pet.image}`,
    };

    return res.json({ pet });
  }

  async create(req: Request, res: Response) {
    const { type, name, age, features, user_id, image } = req.body;

    const parsedFeatures = String(features)
      .split(",")
      .map((item) => String(item.trim()));

    const pet = {
      type,
      name,
      age,
      features: parsedFeatures,
      user_id,
      image: req.file.filename,
    };

    await db("pets").insert(pet);

    return res.json({ pet });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const findUser = await db("pets").where({ id: id }).del();

    if (!findUser) return res.send("Animal não encontrado");

    return res.send(`Animal deletado`);
  }
}
