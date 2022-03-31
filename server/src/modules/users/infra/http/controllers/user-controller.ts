import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserService from "@modules/users/services/create-user-service";

export default class UserController {
  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> {
    try {
      const { email, name, phone, password } = req.body;
      const createUser = container.resolve(CreateUserService);

      const content = await createUser.execute({
        email,
        name,
        password,
        phone,
      });

      return res.status(content.statusCode).json({ content });
    } catch (error) {
      next(error);
    }
  }
}
