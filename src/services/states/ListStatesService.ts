import { getCustomRepository } from "typeorm";
import { StatesRepositories } from "../../repositories/StatesRepositories";

class ListStatesService {
    async execute() {
        const statesRepositories = getCustomRepository(StatesRepositories);

        const states = await statesRepositories.find();

        return states;
    }
} 

export { ListStatesService };