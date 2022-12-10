import { container } from "tsyringe";

import UserRepository from "@modules/users/infra/typeorm/repositories/user-repository";
import IUserRepository from "@modules/users/interfaces/repositories/IUserRepository";
import IHashProvider from "@modules/users/providers/Hash/models/IHashProvider";
import HashProvider from "@modules/users/providers/Hash/implementations/hash-provider";
import AnimalRepository from "@modules/animals/infra/typeorm/repositories/animal-repository";
import IAnimalRepository from "@modules/animals/interfaces/repositories/IAnimalRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IAnimalRepository>(
  "AnimalRepository",
  AnimalRepository,
);
container.registerSingleton<IHashProvider>("HashProvider", HashProvider);
