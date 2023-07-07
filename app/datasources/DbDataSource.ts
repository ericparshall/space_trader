import "reflect-metadata";

import { DataSource } from "typeorm";

import { Agent } from "../models/Agent.js";
export const DbDataSource = (env: NodeJS.ProcessEnv): DataSource => new DataSource({
  type: "postgres",
  host: env.PGHOST,
  port: parseInt(env.PGPORT ?? "5432"),
  username: env.PGUSER,
  password: env.PGPASSWORD,
  database: env.PGDATABASE,
  synchronize: true,
  logging: true,
  entities: [Agent],
  migrations: [],
  subscribers: []
});
