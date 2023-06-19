import { type NextFunction, type Request, type Response, Router } from "express";

const router: Router = Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response, _next: NextFunction): void {
  res.render("index", { title: "Space Trader" });
});

export default router;
