import { type NextFunction, type Request, type Response } from "express";
import createHttpError from "http-errors";

export default function handleNotFound (_req: Request, _res: Response, next: NextFunction): void {
  next(createHttpError(404));
}
