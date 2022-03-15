import User from "../infra/typeorm/entity/user";

export default interface IUserRepository {
  create(user: User): Promise<User> | null;
}
