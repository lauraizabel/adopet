import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateAnimalService from "@modules/animals/services/create-animal-service";
import ShowAnimalsService from "@modules/animals/services/show-animals-service";
import UpdateAnimalService from "@modules/animals/services/update-animal-service";
import DeleteAnimalService from "@modules/animals/services/delete-animal-service";
import GetAnimalService from "@modules/animals/services/get-animal-service";

export default class AnimalController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { type, age } = req.body;

    const createAnimal = container.resolve(CreateAnimalService);

    await createAnimal.execute({ userId: Number(id), type, age });

    return res.sendStatus(204);
  }

  public async show(_: Request, res: Response): Promise<Response> {
    const getAnimals = container.resolve(ShowAnimalsService);

    const animals = await getAnimals.execute();

    return res.status(200).json({ animals });
  }

  public async edit(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id } = req.params;
    const { type, age } = req.body;

    await container.resolve(UpdateAnimalService).execute({
      userId: Number(userId),
      animalId: Number(id),
      type,
      age,
    });

    return res.sendStatus(204);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { id: animalId } = req.params;

    await container
      .resolve(DeleteAnimalService)
      .execute({ animalId: Number(animalId), userId: Number(id) });

    return res.sendStatus(204);
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    const { id: animalId } = req.params;

    const animal = await container
      .resolve(GetAnimalService)
      .execute({ animalId: Number(animalId) });

    return res.status(200).json({ animal });
  }
}
