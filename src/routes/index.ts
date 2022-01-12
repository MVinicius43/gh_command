import { Router } from "express";

import { ghCommandRouter } from "./ghcommand.routes"

const router = Router();

router.use("/ghcommand", ghCommandRouter);

export { router };