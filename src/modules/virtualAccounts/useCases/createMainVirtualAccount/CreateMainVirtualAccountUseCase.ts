import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { v4 as UUIDV4 } from 'uuid';
import { AppError } from "@errors/AppError";
import { IUserRepository } from 'types/user/IUserRepository';
import { IVirtualAccountRepository } from 'types/virtualAccounts/IVirtualAccountRepository';
import { ICreateVirtualAccount } from 'types/virtualAccounts/ICreateVirtualAccount';

@injectable()
class CreateMainVirtualAccountUseCase {
	constructor(
		@inject('User')
		private user: IUserRepository,

		@inject('VirtualAccount')
		private virtualAccount: IVirtualAccountRepository
	) { }

	async execute({ user: { firstName, lastName, email, password }, name }: ICreateVirtualAccount): Promise<void> {
		const user = await this.user.findUserByEmail(email);

		if (user) {
			throw new AppError(`E-mail is already in use.`)
		}

		const virtualAccount = await this.virtualAccount.findVirtualAccountByName(name);

		if (virtualAccount) {
			throw new AppError('Virtual account already exist.');
		};

		const code = `vw${UUIDV4().split('-')[0].toUpperCase()}`;

		const passwordHash = await hash(password, 8);

		await this.virtualAccount.createVirtualAccount({
			code,
			name,
			user: {
				firstName,
				lastName,
				email,
				password: passwordHash
			}
		});
	}
}

export { CreateMainVirtualAccountUseCase };