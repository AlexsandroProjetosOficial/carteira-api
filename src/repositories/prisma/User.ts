import { prisma } from "@database/prisma";
import { ICreateUser } from "types/user/ICreateUser";
import { IUser } from "types/user/IUser";
import { IUserRepository } from "types/user/IUserRepository";

class User implements IUserRepository {
	async findByEmail(email: string): Promise<IUser> {
		const user = await prisma.user.findFirst({
			where: {
				email,
				status: 1
			}
		});

		return user;
	};

	async createUser({ firstName, lastName, email, password, virtualAccountId }: ICreateUser): Promise<void> {
		await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				password,
				virtualAccountId
			}
		});
	};

}

export { User };