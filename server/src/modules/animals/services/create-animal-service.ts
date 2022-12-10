import { ICreateAnimalDTO } from "@modules/animals/interfaces/dtos/ICreateAnimalDTO";
import IAnimalRepository from "@modules/animals/interfaces/repositories/IAnimalRepository";
import IUserRepository from "@modules/users/interfaces/repositories/IUserRepository";
import AppError from "@shared/errors/AppError";
import { CodeHttp } from "@shared/utils/code-http";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateAnimalService {
  constructor(
    @inject("AnimalRepository") private animalRepository: IAnimalRepository,
    @inject("UserRepository") private userRepository: IUserRepository,
  ) {}

  public async execute(data: ICreateAnimalDTO): Promise<void> {
    const user = await this.userRepository.findById(data.userId);

    if (!user) {
      throw new AppError("User dont exist", CodeHttp.BAD_REQUEST);
    }

    await this.animalRepository.create(data);
  }
}

export default CreateAnimalService;
