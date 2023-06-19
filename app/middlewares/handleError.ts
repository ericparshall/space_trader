import { type Request, type Response } from "express";

import { CustomError } from "../models/CustomError.js";

/**
 * Custom error handler to standardize error objects returned to
 * the client
 *
 * @param err Error caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 */
export default function handleError (
  err: TypeError | CustomError,
  req: Request,
  res: Response
): void {
  let customError = err;

  if (!(err instanceof CustomError)) {
    customError = new CustomError(
      "Internal Server Error",
      500
    );
  }

  // we are not using the next function to prevent from triggering
  // the default error-handler. However, make sure you are sending a
  // response to client to prevent memory leaks in case you decide to
  // NOT use, like in this example, the NextFunction .i.e., next(new Error())
  res.status((customError as CustomError).status).send(customError);
}
