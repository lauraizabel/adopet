import { inject, injectable } from "tsyringe";

@injectable()
class CreateAnimalService {
  constructor() {}

  public async execute(): Promise<any> {}
}

export default CreateAnimalService;
