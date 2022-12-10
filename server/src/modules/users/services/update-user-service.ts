import { injectable, inject } from "tsyringe";

import IUserRepository from "@modules/users/interfaces/repositories/IUserRepository";

import { IResponseUserDTO } from "../interfaces/dtos/IResponseCreateUserDTO";

import AppError from "@shared/errors/AppError";
import IHashProvider from "../providers/Hash/models/IHashProvider";
import { CodeHttp } from "@shared/utils/code-http";
import { IDefaultResponseDTO } from "@shared/dto/IDefaultResponseDTO";
import { IUpdateUserDTO } from "../interfaces/dtos/IUpdateUserDTO";
import User from "@modules/users/infra/typeorm/entity/user";

@injectable()
class UpdateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    id,
    name,
    email,
    password,
    phone,
    oldPassword,
  }: IUpdateUserDTO): Promise<IDefaultResponseDTO<IResponseUserDTO>> {
    const userId = Number(id);
    const existUser = await this.userRepository.findById(userId);

    if (!existUser) {
      throw new AppError("User does not exist", CodeHttp.BAD_REQUEST);
    }

    const existUserWithEmail = await this.userRepository.findByEmail(email);

    if (existUserWithEmail && existUser.email !== email) {
      throw new AppError("E-mail alredy exists", CodeHttp.BAD_REQUEST);
    }

    if (oldPassword && password) {
      const comparePass = await this.hashProvider.compare(
        oldPassword,
        existUser.password,
      );

      if (!comparePass) {
        throw new AppError("Old password invalid", CodeHttp.BAD_REQUEST);
      }
    }

    // TODO - find new method to improve this part

    const newPass =
      oldPassword && password
        ? await this.hashProvider.generate(password)
        : existUser.password;

    await this.userRepository.update({
      id: userId,
      name,
      email,
      password: newPass,
      created_at: new Date(),
      updated_at: new Date(),
      phone,
    });
    const newUser = (await this.userRepository.findById(userId)) as User;

    const user = {
      name: newUser.name,
      phone: newUser.phone,
      email: newUser.email,
    };

    return { content: { user }, status: "success" };
  }
}

export default UpdateUserService;
