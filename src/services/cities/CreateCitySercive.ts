import axios from "axios"
import { getCustomRepository } from "typeorm";
import { CitiesRepositories } from "../../repositories/CitiesRepositories";

interface ICityRequestIBGE {
    id: number;
    nome: string;
    microrregiao: {
        mesorregiao: {
            UF: {
                id: number;
            }
        }
    }
}

class CreateCityService {
    async execute() {
        const citiesRepositories = getCustomRepository(CitiesRepositories);
        const citiesIbge = await (await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')).data;

        citiesIbge.forEach(async ({
            id,
            nome,
            microrregiao
        }: ICityRequestIBGE) => {
            const cityAlreadyExists = await citiesRepositories.findOne({
                id_ibge: id
            });

            if(!cityAlreadyExists) {
                const city = citiesRepositories.create({
                    name: nome,
                    id_ibge: id,
                    id_state_ibge: microrregiao.mesorregiao.UF.id
                });

                await citiesRepositories.save(city);
            }
        });

        return;
    }
}

export { CreateCityService };
