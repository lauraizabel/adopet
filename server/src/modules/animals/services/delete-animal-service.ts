import { inject, injectable } from "tsyringe";
import IAnimalRepository from "@modules/animals/interfaces/repositories/IAnimalRepository";
import IUserRepository from "@modules/users/interfaces/repositories/IUserRepository";
import AppError from "@shared/errors/AppError";
import { CodeHttp } from "@shared/utils/code-http";
import { IDeleteAnimalDTO } from "@modules/animals/interfaces/dtos/IDeleteAnimalDTO";

@injectable()
class DeleteAnimalService {
  constructor(
    @inject("AnimalRepository") private animalRepository: IAnimalRepository,
    @inject("UserRepository") private userRepository: IUserRepository,
  ) {}

  public async execute({ animalId, userId }: IDeleteAnimalDTO): Promise<void> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new AppError("User dont exist", CodeHttp.BAD_REQUEST);
    }

    const animal = await this.animalRepository.findById(animalId);

    if (!animal) {
      throw new AppError("Animal dont exist", CodeHttp.BAD_REQUEST);
    }

    // TODO: return user in animal as well
    // if (animal.user.id !== animalId) {
    //   throw new AppError(
    //     "User is not the owner of this animal",
    //     CodeHttp.BAD_REQUEST,
    //   );
    // }

    await this.animalRepository.delete(animalId);
  }
}

export default DeleteAnimalService;
