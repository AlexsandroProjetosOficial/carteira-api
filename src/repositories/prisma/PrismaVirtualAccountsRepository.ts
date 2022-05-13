import { prisma } from "@database/prisma";
import { ICreateVirtualAccountDTO } from "@modules/userAccounts/dtos/virtualAccounts/ICreateVirtualAccountDTO";
import { IVirtualAccountDTO } from "@modules/userAccounts/dtos/virtualAccounts/IVirtualAccountDTO";
import { IVirtualAccountsRepositoryDTO } from "@modules/userAccounts/dtos/virtualAccounts/IVirtualAccountsRepositoryDTO";

class PrismaVirtualAccountsRepository implements IVirtualAccountsRepositoryDTO {
	async findByName(virtualAccountName: string): Promise<IVirtualAccountDTO> {
		return await prisma.virtualAccount.findFirst({
			where: {
				name:  virtualAccountName,
				status: 1
			},
		});
	};

	async createVirtualAccount({ code, name }: ICreateVirtualAccountDTO): Promise<string> {
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

export { PrismaVirtualAccountsRepository }