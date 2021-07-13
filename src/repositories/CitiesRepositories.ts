import { EntityRepository, Repository } from "typeorm";
import { City } from "../entities/City";

@EntityRepository(City)
class CitiesRepositories extends Repository<City> {}

export { CitiesRepositories }