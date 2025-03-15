import { Router } from "express";

import packageJson from "../../package.json";

export const baseRouter = Router();

baseRouter.get("/", (_, res) => {
    const { version, name, description, author } = packageJson;
  res.status(200).json({
    version,name,description,author,
  });
});