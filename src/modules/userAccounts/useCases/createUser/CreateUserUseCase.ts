import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { v4 as UUIDV4 } from 'uuid';
import { AppError } from "@errors/AppError";
import { IUsersRepositoryDTO } from '@modules/userAccounts/dtos/users/IUsersRepositoryDTO';
import { IVirtualAccountsRepositoryDTO } from '@modules/userAccounts/dtos/virtualAccounts/IVirtualAccountsRepositoryDTO';
import { ICreateUserDTO } from '@modules/userAccounts/dtos/users/ICreateUserDTO';

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepositoryDTO,

		@inject('VirtualAccountsRepository')
		private virtualAccountsRepository: IVirtualAccountsRepositoryDTO
	) { }

	async execute({ firstName, lastName, email, password, virtualAccountName }: ICreateUserDTO): Promise<void> {
		const userAlreadyExist = await this.usersRepository.findByEmail(email);

		if(userAlreadyExist) {
			throw new AppError(`User already exist.`)
		}

		const virtualAccountAlreadyExist = await this.virtualAccountsRepository.findByName(virtualAccountName);

		if (virtualAccountAlreadyExist) {
			throw new AppError('Virtual account already exist.');
		};

		const code = `vw${UUIDV4().split('-')[0].toUpperCase()}`;

		const virtualAccountId = await this.virtualAccountsRepository.createVirtualAccount({ code, name: virtualAccountName });

		const passwordHash = await hash(password, 8);

		await this.usersRepository.createUser({ firstName, lastName, email, password: passwordHash, virtualAccountId });
	}
}

export { CreateUserUseCase };