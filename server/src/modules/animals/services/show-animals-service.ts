import Animal from "@modules/animals/infra/typeorm/entity/animal";
import IAnimalRepository from "@modules/animals/interfaces/repositories/IAnimalRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowAnimalsService {
  constructor(
    @inject("AnimalRepository") private animalRepository: IAnimalRepository,
  ) {}

  public async execute(): Promise<Animal[]> {
    const animals = await this.animalRepository.getAll();

    return animals;
  }
}

export default ShowAnimalsService;
