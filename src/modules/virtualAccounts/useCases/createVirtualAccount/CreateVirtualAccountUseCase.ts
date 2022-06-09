import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { v4 as UUIDV4 } from 'uuid';
import { AppError } from "@errors/AppError";
import { IVirtualAccountRepository } from 'types/virtualAccounts/IVirtualAccountRepository';
import { ICreateVirtualAccountReq } from 'types/virtualAccounts/ICreateVirtualAccountReq';

@injectable()
class CreateVirtualAccountUseCase {
	constructor(
		@inject('VirtualAccount')
		private virtualAccount: IVirtualAccountRepository
	) { }

	async execute({ name, userId }: ICreateVirtualAccountReq): Promise<void> {
		const virtualAccount = await this.virtualAccount.findVirtualAccountByName(name);

		if (virtualAccount) {
			throw new AppError('Virtual account already exist.');
		};

		const code = `vw${UUIDV4().split('-')[0].toUpperCase()}`;

		await this.virtualAccount.createVirtualAccount({
			code,
			name,
			userId
		});
	}
}

export { CreateVirtualAccountUseCase };