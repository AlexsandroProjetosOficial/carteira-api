import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserRequest {
    id: string;
    first_name: string;
    last_name: string;
    cpf: string;
    phone: string;
    phone_cell: string;
    nick_name: string;
    birthday: Date;
}

class UpdatePersonalDataUserService {
    async execute({
        id,
        first_name,
        last_name,
        cpf,
        phone,
        phone_cell,
        nick_name,
        birthday
    }: IUserRequest) {
        const userRepository = getCustomRepository(UsersRepositories);

        const userDoesntExists = await userRepository.findOne({
            id
        });

        if (!userDoesntExists) {
            throw new Error("User doesn't exists");
        }

        const user = await userRepository.update(id, {
            first_name,
            last_name,
            cpf,
            phone,
            phone_cell,
            nick_name,
            birthday
        });

        if(!user) {
            throw new Error("User doesn't updated.");
        }

        return classToPlain(user);
    }
}

export { UpdatePersonalDataUserService };