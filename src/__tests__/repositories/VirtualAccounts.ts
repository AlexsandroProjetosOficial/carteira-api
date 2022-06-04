import { ICreateVirtualAccount } from 'types/virtualAccounts/ICreateVirtualAccount';
import { IVirtualAccount } from 'types/virtualAccounts/IVirtualAccount';
import { IVirtualAccountRepository } from 'types/virtualAccounts/IVirtualAccountRepository';
import { VirtualAccount } from '../entities/VirtualAccount';

class VirtualAccounts implements IVirtualAccountRepository{
	virtualAccount: VirtualAccount[] = [];

	async createVirtualAccount({ code, name }: ICreateVirtualAccount): Promise<string> {
		const virtualAccount = new VirtualAccount();

		Object.assign(virtualAccount, {
			code,
			name
		});

		this.virtualAccount.push(virtualAccount);

		return virtualAccount.id;
	};	

	async findByName(virtualAccountName: string): Promise<IVirtualAccount> {
		return this.virtualAccount.find((virtualAccount) => virtualAccount.name === virtualAccountName);
	};
};

export { VirtualAccounts };