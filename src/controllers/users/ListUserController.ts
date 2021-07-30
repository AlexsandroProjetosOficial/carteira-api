import { Request, Response } from "express";
import { ListUserService } from "../../services/users/ListUserService";


class ListUserController {
    async handle(req: Request, res: Response) {
        const id = req.params.id;

        const listUserService = new ListUserService();

        const user = listUserService.execute({ id });

    }
}

export { ListUserController }