import * as yup from 'yup';
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
        const usersRepository = getCustomRepository(UsersRepositories);

        const schema = yup.object().shape({
            first_name: yup.string().required('The first name is required.'),
            last_name: yup.string().required('The last name is required.'),
            email: yup.string().email().required('The email is required.'),
            password: yup.string().required('The password is required.').min(6)
        });

        await schema.validate({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        }).catch(function (err) {
            throw new Error(err.errors);
        });

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error('User already exists');
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            first_name,
            last_name,
            email,
            password: passwordHash
        });

        await usersRepository.save(user);

        return classToPlain(user);
    }
}

export { CreateUserService };
