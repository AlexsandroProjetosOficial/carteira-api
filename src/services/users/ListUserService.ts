import { createQueryBuilder, getCustomRepository, getManager } from "typeorm";
import { Address } from "../../entities/Address";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserProps {
    id: string;
}

class ListUserService {
    async execute({ id }: IUserProps) {
        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.createQueryBuilder('user')
        .leftJoin('user.address', 'address')
        .where('user.id = :id', { id })
        .getMany();


        console.log(user);
    }
}

export { ListUserService };

