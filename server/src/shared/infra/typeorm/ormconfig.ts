import { ConnectionOptions } from "typeorm";

const ormConfig: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: ["./src/modules/*/infra/typeorm/entity/*.ts"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
  logging: false,
  synchronize: true,
};

export default ormConfig;
