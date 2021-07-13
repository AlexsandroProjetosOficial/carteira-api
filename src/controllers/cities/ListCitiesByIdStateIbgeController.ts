import { Request, Response } from "express";
import { ListCitiesByIdStateIbgeService } from "../../services/cities/ListCitiesByIdStateIbgeService";

class ListCitiesByIdStateIbgeController {
    async handle(req: Request, res: Response){
        const id_state_ibge = req.params.id_state_ibge;

        const listCitiesController = new ListCitiesByIdStateIbgeService()

        const cities = await listCitiesController.execute(id_state_ibge);

        return res.status(200).json({
            message: 'Cities has been found.',
            cities
        })
    }
}

export { ListCitiesByIdStateIbgeController };