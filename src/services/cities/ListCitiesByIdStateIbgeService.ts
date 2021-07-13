import { getCustomRepository } from "typeorm";
import { CitiesRepositories } from "../../repositories/CitiesRepositories";

class ListCitiesByIdStateIbgeService{
    async execute(id_state_ibge: string) {
        const citiesRepositories = getCustomRepository(CitiesRepositories);

        const cities = await citiesRepositories.find({
            where: {
                id_state_ibge: id_state_ibge
            }
        });

        return cities;
    }
}

export { ListCitiesByIdStateIbgeService };