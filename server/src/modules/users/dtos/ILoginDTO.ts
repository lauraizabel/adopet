import { IResponseCreateUserDTO } from "./IResponseCreateUserDTO";

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IResponseLoginDTO extends IResponseCreateUserDTO {
  token: string;
}
