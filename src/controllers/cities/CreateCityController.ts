import { Request, Response } from "express";
import { CreateCityService } from "../../services/cities/CreateCitySercive";

class CreateCityController {
    async handle(req: Request, res: Response){
        const createCityService = new CreateCityService();

        const cities = await createCityService.execute();

        return res.status(201).json({
            message: 'Cities has been created successfully',
            cities
        });
    }
}

export { CreateCityController };