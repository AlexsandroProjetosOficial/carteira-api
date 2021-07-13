import * as yup from 'yup';
import { getCustomRepository } from "typeorm";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IAutheticateRequeste {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({
        email,
        password
    }: IAutheticateRequeste) {
        const usersRepositorie = getCustomRepository(UsersRepositories);

        const schema = yup.object().shape({
            email: yup.string().email().required('The email is required.'),
            password: yup.string().required('The password is required.').min(6)
        });

        await schema.validate({
            email: email,
            password: password
        }).catch(function (err) {
            throw new Error(err.errors);
        });

        const user = await usersRepositorie.findOne({ email });

        if(!user){
            throw new Error('Email/Password incorrect');
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error('Email/Password incorrect');
        }

        const token = sign(
            {
                email: user.email
            },
            process.env.CHAVE_PRIVATE_TOKEN,
            {
                subject: user.id,
                expiresIn: '2d'
            }
        );

        return token;
    }
}

export { AuthenticateUserService };