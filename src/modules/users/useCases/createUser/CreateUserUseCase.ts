import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { v4 as UUIDV4 } from 'uuid';
import { AppError } from "@errors/AppError";
import { IUserRepository } from 'types/user/IUserRepository';
import { IVirtualAccountRepository } from 'types/virtualAccounts/IVirtualAccountRepository';
import { ICreateUser } from 'types/user/ICreateUser';

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('User')
		private user: IUserRepository,

		@inject('VirtualAccount')
		private virtualAccount: IVirtualAccountRepository
	) { }

	async execute({ firstName, lastName, email, password, virtualAccountName }: ICreateUser): Promise<void> {
		const user = await this.user.findByEmail(email);

		if(user) {
			throw new AppError(`User already exist.`)
		}

		const virtualAccount = await this.virtualAccount.findByName(virtualAccountName);

		if (virtualAccount) {
			throw new AppError('Virtual account already exist.');
		};

		const code = `vw${UUIDV4().split('-')[0].toUpperCase()}`;

		const virtualAccountId = await this.virtualAccount.createVirtualAccount({ code, name: virtualAccountName });

		const passwordHash = await hash(password, 8);

		await this.user.createUser({ firstName, lastName, email, password: passwordHash, virtualAccountId });
	}
}

export { CreateUserUseCase };