import { injectable, inject } from "tsyringe";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import User from "../infra/typeorm/entity/user";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    phone,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.create({
      name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
      phone,
    });

    return user as User;
  }
}

export default CreateUserService;
