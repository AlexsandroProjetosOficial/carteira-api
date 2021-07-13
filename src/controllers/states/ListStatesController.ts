import { Response, Request } from "express";
import { ListStatesService } from "../../services/states/ListStatesService";

class ListStatesController {
    async handle(req: Request, res: Response) {
        const listStateController = new ListStatesService();

        const states = await listStateController.execute();

        return res.status(200).json({
            message: 'States has been found.',
            states
        });
    }
}

export { ListStatesController };