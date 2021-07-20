import { UsersRepositories } from "../../repositories/UsersRepositories";
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';

interface IUserRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({
        first_name,
        last_name,
        email,
        password
    }: IUserRequest) {
        const userRepository = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error('User already exists');
        }

        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            first_name,
            last_name,
            email,
            password: passwordHash
        });

        await userRepository.save(user);

        return classToPlain(user);
    }
}

export { CreateUserService };