import { prisma } from "@database/prisma";
import { IAddUserToVirtualAccount } from "types/user/IAddUserToVirtualAccount";
import { ICreateUser } from "types/user/ICreateUser";
import { IUser } from "types/user/IUser";
import { IUserRepository } from "types/user/IUserRepository";

class User implements IUserRepository {
	async findUserByEmail(email: string): Promise<IUser> {
		const user = await prisma.user.findFirst({
			where: {
				email,
				status: 1
			}
		});

		return user;
	};

	async createUser({ firstName, lastName, email, virtualAccountId }: ICreateUser): Promise<IUser> {
		const user = await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				isAdmin: false,
				UsersVirtualAccounts: {
					create: [
						{
							virtualAccountId: virtualAccountId
						}
					]
				}
			},
			include: {
				UsersVirtualAccounts: {
					select: {
						virtualAccount: {
							select: {
								code: true,
								name: true
							}
						}
					}
				}
			}
		});

		return user;
	};

	async addUserToVirtualAccount({ userId, virtualAccountId }: IAddUserToVirtualAccount): Promise<boolean> {
		const userAdded = await prisma.usersVirtualAccounts.create({
			data: {
				userId,
				virtualAccountId
			}
		});

		return !!userAdded;
	}
}

export { User };