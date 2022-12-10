import { inject, injectable } from "tsyringe";
import { IUpdateAnimalDTO } from "@modules/animals/interfaces/dtos/IUpdateAnimalDTO";
import IAnimalRepository from "@modules/animals/interfaces/repositories/IAnimalRepository";
import IUserRepository from "@modules/users/interfaces/repositories/IUserRepository";
import AppError from "@shared/errors/AppError";
import { CodeHttp } from "@shared/utils/code-http";
import Animal from "@modules/animals/infra/typeorm/entity/animal";

@injectable()
class UpdateAnimalService {
  constructor(
    @inject("AnimalRepository") private animalRepository: IAnimalRepository,
    @inject("UserRepository") private userRepository: IUserRepository,
  ) {}

  public async execute({
    age,
    animalId,
    userId,
    type,
  }: IUpdateAnimalDTO): Promise<Animal | undefined> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new AppError("User dont exist", CodeHttp.BAD_REQUEST);
    }

    const animal = await this.animalRepository.findById(animalId);

    if (!animal) {
      throw new AppError("Animal dont exist", CodeHttp.BAD_REQUEST);
    }

    animal.type = type || animal.type;
    animal.age = age || animal.age;

    const newAnimal = await this.animalRepository.update(animal);

    return newAnimal;
  }
}

export default UpdateAnimalService;
