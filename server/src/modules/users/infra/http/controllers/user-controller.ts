import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserService from "@modules/users/services/create-user-service";
import User from "../../typeorm/entity/user";
import { getRepository } from "typeorm";

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, name, phone, password } = req.body;
    // const createUser = container.resolve(CreateUserService);

    const user = getRepository(User).create({
      email,
      name,
      password,
      phone,
    });

    return res.json({ user });
  }
}
