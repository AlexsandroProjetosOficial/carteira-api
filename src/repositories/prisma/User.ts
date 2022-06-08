import { prisma } from "@database/prisma";
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

	async createAdminUser({ firstName, lastName, email, password }: ICreateUser): Promise<string> {
		const user = await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				password
			},
			select: { id: true }
		});

		return user.id;
	};

}

export { User };