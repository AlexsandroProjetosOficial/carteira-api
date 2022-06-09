import { prisma } from "@database/prisma";
import { ICreateVirtualAccount } from "types/virtualAccounts/ICreateVirtualAccount";
import { IVirtualAccount } from "types/virtualAccounts/IVirtualAccount";
import { IVirtualAccountRepository } from "types/virtualAccounts/IVirtualAccountRepository";

class VirtualAccount implements IVirtualAccountRepository {
	async findVirtualAccountByName(virtualAccountName: string): Promise<IVirtualAccount> {
		return await prisma.virtualAccount.findFirst({
			where: {
				name: virtualAccountName,
				status: 1
			},
		});
	};

	async createVirtualAccount({ code, name, user: { firstName, lastName, email, password } }: ICreateVirtualAccount): Promise<void> {
		await prisma.virtualAccount.create({
			data: {
				code,
				name,
				UsersVirtualAccounts: {
					create: [
						{
							user: {
								create: {
									firstName,
									lastName,
									email,
									password
								}
							}
						}
					]
				}
			}
		});
	};
};

export { VirtualAccount }