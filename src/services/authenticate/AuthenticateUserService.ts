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
        const usersRepository = getCustomRepository(UsersRepositories);

        const user = await usersRepository.findOne({ email });

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
            process.env.KEY_PRIVATE_TOKEN,
            {
                subject: user.id,
                expiresIn: '2d'
            }
        );

        return token;
    }
}

export { AuthenticateUserService };