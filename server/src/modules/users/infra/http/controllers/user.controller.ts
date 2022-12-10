import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserService from "@modules/users/services/create-user-service";
import LoginService from "@modules/users/services/login-service";
import UpdateUserService from "@modules/users/services/update-user-service";

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, name, phone, password } = req.body;

    const createUser = container.resolve(CreateUserService);

    const content = await createUser.execute({
      email,
      name,
      password,
      phone,
    });

    return res.status(204).json({ content });
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const login = container.resolve(LoginService);
    const content = await login.execute({
      email,
      password,
    });

    return res.status(200).json({ content });
  }

  public async edit(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { email, name, phone, password, oldPassword } = req.body;

    const updateUser = container.resolve(UpdateUserService);

    const content = await updateUser.execute({
      email,
      name,
      password,
      phone,
      oldPassword,
      id,
    });

    return res.status(200).json({ content });
  }
}
