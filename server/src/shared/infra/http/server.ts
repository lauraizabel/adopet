import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
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
app.use((err, req, res, _) => ErrorMiddleware(err, req, res, _));

app.listen(process.env.APP_API_PORT || 3001, () => {
  console.log(`✅ - Server is listening to ${process.env.APP_API_URL || 3001}`);
});
