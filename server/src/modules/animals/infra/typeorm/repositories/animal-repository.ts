import { Repository } from "typeorm";

import Animal from "@modules/animals/infra/typeorm/entity/animal";
import IAnimalRepository from "@modules/animals/interfaces/repositories/IAnimalRepository";
import { getTypeORMConnection } from "@shared/infra/typeorm/connection";
import { ICreateAnimalDTO } from "@modules/animals/interfaces/dtos/ICreateAnimalDTO";

class AnimalRepository implements IAnimalRepository {
  private ormRepository: Repository<Animal>;

  constructor() {
    this.ormRepository = getTypeORMConnection().getRepository(Animal);
  }

  public async create(animalData: ICreateAnimalDTO): Promise<Animal> {
    const animal = await this.ormRepository.create(animalData);
    this.save(animal);

    return animal;
  }

  public async save(animal: Animal): Promise<Animal> {
    return this.ormRepository.save(animal);
  }

  public async findById(id: number): Promise<Animal | undefined> {
    return this.ormRepository.findOne({ id });
  }

  public async delete(id: number): Promise<void> {
    this.ormRepository.delete({ id });
  }

  public async update(animal: Animal): Promise<Animal | undefined> {
    await this.ormRepository.update(Number(animal.id), animal);
    return this.ormRepository.findOne({ id: animal.id });
  }
}

export default AnimalRepository;
