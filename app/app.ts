import "reflect-metadata";

import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import express from "express";
import fs from "fs";
import logger from "morgan";
import path from "path";

import { DbDataSource } from "./datasources/DbDataSource.js";
import { appRoot } from "./lib/project.js";
import handleError from "./middlewares/handleError.js";
import handleNotFound from "./middlewares/handleNotFound.js";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const envVars = dotenv.parse(fs.readFileSync(path.join(appRoot, "../.env")));
for (const key in envVars) {
  process.env[key] = envVars[key];
}

const app = express();

app.set("views", path.join(appRoot, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(appRoot, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(handleError);
app.use(handleNotFound);

const dataSource = DbDataSource(process.env);

dataSource.initialize().then(() => {
  app.listen(process.env.PORT ?? "3000");
}).catch(err => {
  console.log(err);
});
