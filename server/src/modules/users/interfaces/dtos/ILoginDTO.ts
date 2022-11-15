import { IResponseUserDTO } from "./IResponseCreateUserDTO";

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IResponseLoginDTO extends IResponseUserDTO {
  token: string;
}
