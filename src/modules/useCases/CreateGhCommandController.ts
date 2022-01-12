import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateGhCommandUseCase } from "./CreateGhCommandUseCase";

class CreateGhCommandController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { ghHttp, commitText } = request.body;
        const createGhCommandUseCase = container.resolve(CreateGhCommandUseCase)
        
        await createGhCommandUseCase.execute({ ghHttp, commitText });

        return response.status(201).send()
    }
}

export { CreateGhCommandController };