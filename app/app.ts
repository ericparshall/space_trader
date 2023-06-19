import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import path from "path";

import { appRoot } from "./lib/project.js";
import handleError from "./middlewares/handleError.js";
import handleNotFound from "./middlewares/handleNotFound.js";
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
app.use(handleNotFound);

app.listen(process.env.PORT ?? "3000");
