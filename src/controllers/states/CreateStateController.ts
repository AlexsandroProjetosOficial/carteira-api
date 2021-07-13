import { Request, Response } from "express";
import { CreateStateService } from "../../services/states/CreateStateService";

class CreateStateController {
    async handle(req: Request, res: Response) {
        const createStateController = new CreateStateService();

        const states = await createStateController.execute();

        return res.status(201).json({
            message: 'States has been created successfully',
            states
        })
    }
}

export { CreateStateController };