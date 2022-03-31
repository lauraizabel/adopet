import { injectable, inject } from "tsyringe";

import IUserRepository from "@modules/users/repositories/IUserRepository";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IResponseCreateUserDTO } from "../dtos/IResponseCreateUserDTO";

import AppError from "@shared/errors/AppError";
import IHashProvider from "../providers/Hash/models/IHashProvider";
import { CodeHttp } from "@shared/utils/code-http";
import { IDefaultResponseDTO } from "@shared/dto/IDefaultResponseDTO";

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
  }: ICreateUserDTO): Promise<IDefaultResponseDTO<IResponseCreateUserDTO>> {
    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new AppError("E-mail alredy exists", CodeHttp.BAD_REQUEST);
    }

    const hashedPassword = await this.hashProvider.generate(password);

    const {
      name: _name,
      phone: _phone,
      email: _email,
    } = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
      phone,
    });

    const user = {
      name: _name,
      phone: _phone,
      email: _email,
    };

    return { content: { user }, status: "success" };
  }
}

export default CreateUserService;
