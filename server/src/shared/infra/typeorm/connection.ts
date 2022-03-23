import ormConfig from "@shared/infra/typeorm/ormconfig";
import {
  createConnection,
  Connection,
  getConnection,
  EntityTarget,
  Repository,
} from "typeorm";

export const getTypeORMConnection = (
  connectionName = process.env.NODE_ENV,
): Connection => {
  return getConnection(connectionName);
};

const existsConnection = (connectionName): boolean => {
  try {
    getTypeORMConnection(connectionName);
    return true;
  } catch {
    return false;
  }
};

export const createTypeORMConnection = async (
  connectionName = process.env.NODE_ENV,
): Promise<Connection> => {
  if (existsConnection(connectionName))
    return getTypeORMConnection(connectionName);
  return createConnection({ ...ormConfig });
};

export const getRepository = async <T>(
  target: EntityTarget<T>,
): Promise<Repository<T>> => {
  const connection = await createTypeORMConnection();

  return connection.getRepository(target);
};

export default createTypeORMConnection();
