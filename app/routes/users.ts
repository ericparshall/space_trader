import { type NextFunction, type Request, type Response, Router } from "express";

const router: Router = Router();

/* GET users listing. */
router.get("/", function (req: Request, res: Response, _next: NextFunction): void {
  res.send("respond with a resource");
});

export default router;
