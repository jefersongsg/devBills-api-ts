import { Router } from "express";

import { baseRouter } from "./base.route";

export const router = Router();

router.use("/", baseRouter);