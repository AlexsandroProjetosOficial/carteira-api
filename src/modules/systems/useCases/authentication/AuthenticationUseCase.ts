import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs';
import { IAuthenticationDTO } from "@modules/systems/dtos/IAuthenticationDTO";
import { IUsersRepositoryDTO } from '@modules/userAccounts/dtos/users/IUsersRepositoryDTO';
import { AppError } from '@errors/AppError';
import { generateToken } from '@utils/generateToken';

@injectable()
class AuthenticationUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepositoryDTO,
	) { }

	async execute({ email, password }: IAuthenticationDTO): Promise<string> {
		const userAlreadyExist = await this.usersRepository.findByEmail(email);

		if (!userAlreadyExist) {
			throw new AppError('E-mail or password incorrect.')
		}

		const passwordMatch = await compare(password, userAlreadyExist.password);

		if (!passwordMatch) {
			throw new AppError('E-mail or password incorrect.')
		}

		const token = await generateToken({
			id: userAlreadyExist.id,
			virtualAccountId: userAlreadyExist.virtualAccountId
		});

		return token;
	}
}

export { AuthenticationUseCase };