import { prisma } from "@database/prisma";
import { ICreateVirtualAccount } from "types/virtualAccounts/ICreateVirtualAccount";
import { IVirtualAccount } from "types/virtualAccounts/IVirtualAccount";
import { IVirtualAccountRepository } from "types/virtualAccounts/IVirtualAccountRepository";

class VirtualAccount implements IVirtualAccountRepository {
	async findByName(virtualAccountName: string): Promise<IVirtualAccount> {
		return await prisma.virtualAccount.findFirst({
			where: {
				name:  virtualAccountName,
				status: 1
			},
		});
	};

	async createVirtualAccount({ code, name }: ICreateVirtualAccount): Promise<string> {
		const virtualAccount =  await prisma.virtualAccount.create({
			data: {
				code,
				name
			},
			select: {
				id: true
			}
		});

		return virtualAccount.id;
	};
};

export { VirtualAccount }