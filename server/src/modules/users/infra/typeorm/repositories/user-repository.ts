import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import IUserRepository from "@modules/users/repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entity/user";

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);
    this.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UserRepository;
