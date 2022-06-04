import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs';
import { AppError } from '@errors/AppError';
import { generateToken } from '@utils/generateToken';
import { ISystem } from 'types/system/ISystem';
import { IUserRepository } from 'types/user/IUserRepository';

@injectable()
class AuthenticationUseCase {
	constructor(
		@inject('User')
		private user: IUserRepository,
	) { }

	async execute({ email, password }: ISystem): Promise<string> {
		const user = await this.user.findByEmail(email);

		if (!user) {
			throw new AppError('E-mail or password incorrect.')
		}

		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) {
			throw new AppError('E-mail or password incorrect.')
		}

		const token = await generateToken({
			id: user.id,
			virtualAccountId: user.virtualAccountId
		});

		return token;
	}
}

export { AuthenticationUseCase };