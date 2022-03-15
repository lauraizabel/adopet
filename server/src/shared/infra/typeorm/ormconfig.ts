import { ConnectionOptions } from "typeorm";

const ormConfig: ConnectionOptions = {
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
};

export default ormConfig;
