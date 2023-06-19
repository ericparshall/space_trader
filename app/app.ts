import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import express, { type NextFunction, type Request, type Response } from "express";
import createHttpError from "http-errors";
import logger from "morgan";
import path from "path";

import { appRoot } from "./lib/project.js";
import handleError from "./middlewares/handleError.js";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

dotenv.config({ path: path.join(appRoot, "../.env") });

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

// catch 404 and forward to error handler
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(createHttpError(404));
});

app.listen(process.env.PORT ?? "3000");
