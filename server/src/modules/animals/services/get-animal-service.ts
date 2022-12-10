import { inject, injectable } from "tsyringe";
import IAnimalRepository from "@modules/animals/interfaces/repositories/IAnimalRepository";
import AppError from "@shared/errors/AppError";
import { CodeHttp } from "@shared/utils/code-http";
import { IGetAnimalDTO } from "@modules/animals/interfaces/dtos/IGetAnimalDTO";
import Animal from "@modules/animals/infra/typeorm/entity/animal";

@injectable()
class GetAnimalService {
  constructor(
    @inject("AnimalRepository") private animalRepository: IAnimalRepository,
  ) {}

  public async execute({ animalId }: IGetAnimalDTO): Promise<Animal> {
    const animal = await this.animalRepository.findById(animalId);

    if (!animal) {
      throw new AppError("Animal dont exist", CodeHttp.BAD_REQUEST);
    }

    return animal;
  }
}

export default GetAnimalService;
