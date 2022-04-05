import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

import { IDefaultResponseDTO } from "@shared/dto/IDefaultResponseDTO";
import AppError from "@shared/errors/AppError";
import { CodeHttp } from "@shared/utils/code-http";
import { ILoginDTO, IResponseLoginDTO } from "../dtos/ILoginDTO";
import IHashProvider from "../providers/Hash/models/IHashProvider";
import IUserRepository from "../repositories/IUserRepository";
import auth from "@config/auth";

@injectable()
class LoginService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    email,
    password,
  }: ILoginDTO): Promise<IDefaultResponseDTO<IResponseLoginDTO>> {
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new AppError("Invalid password or username", CodeHttp.BAD_REQUEST);
    }

    const comparePass = await this.hashProvider.compare(
      password,
      existUser.password,
    );

    if (!comparePass) {
      throw new AppError("Invalid password or username", CodeHttp.BAD_REQUEST);
    }

    const user = {
      name: existUser.name,
      email: existUser.email,
      phone: existUser.phone,
    };

    const token = sign(
      { id: existUser.id },
      auth.jwt.secret?.toString() || "secret",
      {
        expiresIn: auth.jwt.expiresIn,
      },
    );

    return { content: { user, token }, status: "success" };
  }
}

export default LoginService;
