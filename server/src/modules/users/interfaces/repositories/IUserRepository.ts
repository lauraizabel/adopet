import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

import User from "../../infra/typeorm/entity/user";

export default interface IUserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: number): Promise<User | undefined>;
  update(user: QueryDeepPartialEntity<User>): Promise<void>;
}
