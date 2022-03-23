import { injectable, inject } from "tsyringe";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import User from "../infra/typeorm/entity/user";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import AppError from "@shared/errors/AppError";
import IHashProvider from "../providers/Hash/models/IHashProvider";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    phone,
  }: ICreateUserDTO): Promise<User> {
    console.log("here");
    const existUser = await this.userRepository.findByEmail(email);

    // TODO - fixar esse erro e descobrir o pq nao ta pegando
    // if (existUser) {
    //   throw new AppError("E-mail alredy exists", 400);
    // }

    const hashedPassword = await this.hashProvider.generate(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
      phone,
    });

    return user;
  }
}

export default CreateUserService;
