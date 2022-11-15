import { container } from "tsyringe";

import UserRepository from "@modules/users/infra/typeorm/repositories/user-repository";
import IUserRepository from "@modules/users/interfaces/repositories/IUserRepository";
import IHashProvider from "@modules/users/providers/Hash/models/IHashProvider";
import HashProvider from "@modules/users/providers/Hash/implementations/hash-provider";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IHashProvider>("HashProvider", HashProvider);
