import "reflect-metadata";
import "dotenv/config";
import express from "express";
import cors from "cors";

import routes from "./routes";

import "@shared/container";
import "@shared/infra/typeorm/connection";
import ErrorMiddleware from "./middlewares/error-middleware";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(ErrorMiddleware);

app.listen(process.env.APP_API_PORT || 3030, () => {
  console.log(`✅ - Server is listening to ${process.env.APP_API_URL || 3030}`);
});
