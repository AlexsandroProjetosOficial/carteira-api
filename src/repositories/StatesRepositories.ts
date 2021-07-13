import { EntityRepository, Repository } from "typeorm";
import { State } from "../entities/State";

@EntityRepository(State)
class StatesRepositories extends Repository<State> {}

export { StatesRepositories }