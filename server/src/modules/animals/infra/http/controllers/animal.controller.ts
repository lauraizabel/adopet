import { Request, Response } from "express";
import { container } from "tsyringe";

export default class AnimalController {
  public async create(req: Request, res: Response): Promise<Response> {}

  // public async edit(req: Request, res: Response): Promise<Response> {}

  // public async delete(req: Request, res: Response): Promise<Response> {}
}
