import * as yup from 'yup';
import { Request, Response } from "express";
import { ListCitiesByIdStateIbgeService } from "../../services/cities/ListCitiesByIdStateIbgeService";

class ListCitiesByIdStateIbgeController {
    async handle(req: Request, res: Response){
        const id_state_ibge = req.params.id_state_ibge;

        const schema = yup.object().shape({
            id_state_ibge: yup.string().required('state ID is required')
        });

        await schema.validate({
            id_state_ibge: id_state_ibge
        }).catch((err) => {
            throw new Error(err.errors);
        });

        const listCitiesController = new ListCitiesByIdStateIbgeService()

        const cities = await listCitiesController.execute(id_state_ibge);

        return res.status(200).json({
            message: 'Cities has been found.',
            cities
        })
    }
}

export { ListCitiesByIdStateIbgeController };