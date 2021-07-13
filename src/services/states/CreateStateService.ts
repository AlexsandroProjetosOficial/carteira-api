import axios from "axios";
import { getCustomRepository } from "typeorm";
import { StatesRepositories } from "../../repositories/StatesRepositories";

interface IStateRequestIBGE {
    id: number;
    sigla: string;
    nome: string;
}

class CreateStateService {
    async execute(){
        const statesRepositories = getCustomRepository(StatesRepositories);
        const statesIbge = await (await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')).data;
        
        statesIbge.forEach(async ({
            id,
            sigla,
            nome
        }: IStateRequestIBGE) => {
            const stateAlreadyExists = await statesRepositories.findOne({
                id_ibge: id
            });

            if(!stateAlreadyExists) {
                const state = statesRepositories.create({
                    name: nome,
                    id_ibge: id,
                    abbreviation: sigla
                });

                await statesRepositories.save(state);
            }
        });

        return;
    }
}

export { CreateStateService };