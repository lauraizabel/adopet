import { createConnection } from "typeorm";
import ormConfig from "@shared/infra/typeorm/ormconfig";

createConnection({ ...ormConfig });
