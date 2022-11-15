import { injectable, inject } from "tsyringe";

import IUserRepository from "@modules/users/interfaces/repositories/IUserRepository";

import { IResponseUserDTO } from "../interfaces/dtos/IResponseCreateUserDTO";

import AppError from "@shared/errors/AppError";
import IHashProvider from "../providers/Hash/models/IHashProvider";
import { CodeHttp } from "@shared/utils/code-http";
import { IDefaultResponseDTO } from "@shared/dto/IDefaultResponseDTO";
import { IUpdateUserDTO } from "../interfaces/dtos/IUpdateUserDTO";

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
    const existUser = await this.userRepository.findById(Number(id));

    if (!existUser) {
      throw new AppError("User does not exist", CodeHttp.BAD_REQUEST);
    }

    const existUserWithEmail = await this.userRepository.findByEmail(email);

    if (existUserWithEmail) {
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
    // TODO - melhorar essa parte da criacao de nova senha
    const newPass =
      oldPassword && password
        ? await this.hashProvider.generate(password)
        : password;

    const {
      name: _name,
      phone: _phone,
      email: _email,
    } = await this.userRepository.create({
      name,
      email,
      password: newPass,
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

export default UpdateUserService;
