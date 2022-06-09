import { prisma } from "@database/prisma";
import { Prisma } from "@prisma/client";
import { ICreateMainVirtualAccount } from "types/virtualAccounts/ICreateMainVirtualAccount";
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

	async findVirtualAccountById(virtualAccountId: string): Promise<IVirtualAccount> {
		return await prisma.virtualAccount.findFirst({
			where: {
				id: virtualAccountId,
				status: 1
			},
		});
	};

	async createMainVirtualAccount({ code, name, user: { firstName, lastName, email, password } }: ICreateMainVirtualAccount): Promise<void> {
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

	async createVirtualAccount({ code, name, userId }: ICreateVirtualAccount): Promise<void> {
		await prisma.virtualAccount.create({
			data: {
				code,
				name,
				UsersVirtualAccounts: {
					create: [
						{
							userId
						}
					]
				}
			}
		});
	};

	async findVirtualAccountsByUserId(userId: string): Promise<IVirtualAccount[]> {
		const virtualAccounts = await prisma.$queryRaw<IVirtualAccount[]>`
			SELECT 
				VA.id,
				VA.name,
				VA.code
			FROM
				virtualAccounts AS VA
			INNER JOIN 
				UsersVirtualAccounts AS UVA ON UVA.virtualAccountId = VA.id
			INNER JOIN 
				users AS U ON U.id = UVA.userId
			WHERE 
				UVA.status = 1
			AND
				U.status = 1
			AND
				VA.status = 1
			AND
				U.id = ${userId}
		`;

		return virtualAccounts;
	};
};

export { VirtualAccount }