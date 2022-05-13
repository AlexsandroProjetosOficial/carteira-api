import { VirtualAccountInMemory } from "@entities/in-memory/VirtualAccountInMemory";
import { ICreateVirtualAccountDTO } from "@modules/userAccounts/dtos/virtualAccounts/ICreateVirtualAccountDTO";
import { IVirtualAccountDTO } from "@modules/userAccounts/dtos/virtualAccounts/IVirtualAccountDTO";
import { IVirtualAccountsRepositoryDTO } from "@modules/userAccounts/dtos/virtualAccounts/IVirtualAccountsRepositoryDTO";

class VirtualAccountRepositoryInMemory implements IVirtualAccountsRepositoryDTO{
	virtualAccount: VirtualAccountInMemory[] = [];

	async createVirtualAccount({ code, name }: ICreateVirtualAccountDTO): Promise<string> {
		const virtualAccount = new VirtualAccountInMemory();

		Object.assign(virtualAccount, {
			code,
			name
		});

		this.virtualAccount.push(virtualAccount);

		return virtualAccount.id;
	};	

	async findByName(virtualAccountName: string): Promise<IVirtualAccountDTO> {
		return this.virtualAccount.find((virtualAccount) => virtualAccount.name === virtualAccountName);
	};
};

export { VirtualAccountRepositoryInMemory };