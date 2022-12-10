import { Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

import { ICreateUserDTO } from "@modules/users/interfaces/dtos/ICreateUserDTO";
import IUserRepository from "@modules/users/interfaces/repositories/IUserRepository";
import { getTypeORMConnection } from "@shared/infra/typeorm/connection";
import User from "../entity/user";

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getTypeORMConnection().getRepository(User);
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create(userData);
    this.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.ormRepository.findOne({ email });
  }

  public async findById(id: number): Promise<User | undefined> {
    return this.ormRepository.findOne({ id });
  }

  public async update(user: QueryDeepPartialEntity<User>): Promise<void> {
    await this.ormRepository.update(Number(user.id), user);
  }
}

export default UserRepository;
