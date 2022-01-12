import { Router } from "express";

import { CreateGhCommandController } from "../modules/useCases/CreateGhCommandController";

const ghCommandRouter = Router();

const createGhCommandController = new CreateGhCommandController();

ghCommandRouter.post("/", createGhCommandController.handle)

export { ghCommandRouter };