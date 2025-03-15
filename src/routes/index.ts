import { Router } from "express";

import { baseRouter } from "./base.route";
import { categoriesRoutes } from "./categories.route";

export const router = Router();

router.use("/", baseRouter);
router.use("/categories", categoriesRoutes);