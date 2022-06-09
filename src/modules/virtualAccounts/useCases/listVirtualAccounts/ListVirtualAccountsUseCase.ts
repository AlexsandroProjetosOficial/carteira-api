import { AppError } from "@errors/AppError";
import { inject, injectable } from "tsyringe";
import { IVirtualAccount } from "types/virtualAccounts/IVirtualAccount";
import { IVirtualAccountRepository } from "types/virtualAccounts/IVirtualAccountRepository";

@injectable()
class ListVirtualAccountsUseCase {
	constructor(
		@inject('VirtualAccount')
		private virtualAccount: IVirtualAccountRepository
	) { }

	async execute(userId: string): Promise<IVirtualAccount[]> {
		const virtualAccounts = await this.virtualAccount.findVirtualAccountsByUserId(userId);

		if(virtualAccounts.length === 0) {
			throw new AppError(`No viurtual accounts registered.`);
		}

		return virtualAccounts;
	}
}

export { ListVirtualAccountsUseCase };