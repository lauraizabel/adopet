import { ICreateAnimalDTO } from "@modules/animals/dtos/ICreateAnimalDTO";
import Animal from "@modules/animals/infra/typeorm/entity/animal";

export default interface IAnimalRepository {
  create(animal: ICreateAnimalDTO): Promise<Animal>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Animal | undefined>;
  update(animal: Animal): Promise<Animal | undefined>;
}
