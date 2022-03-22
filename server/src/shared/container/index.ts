import { container } from "tsyringe";

import UserRepository from "@modules/users/infra/typeorm/repositories/user-repository";
import IUserRepository from "@modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
