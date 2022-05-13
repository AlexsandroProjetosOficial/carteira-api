import { prisma } from "@database/prisma";
import { ICreateUserDTO } from "@modules/userAccounts/dtos/users/ICreateUserDTO";
import { IUserDTO } from "@modules/userAccounts/dtos/users/IUserDTO";
import { IUsersRepositoryDTO } from "@modules/userAccounts/dtos/users/IUsersRepositoryDTO";

class PrismaUsersRespository implements IUsersRepositoryDTO {
	async findByEmail(email: string): Promise<IUserDTO> {
		const user = await prisma.user.findFirst({
			where: {
				email,
				status: 1
			}
		});

		return user;
	};

	async createUser({ firstName, lastName, email, password, virtualAccountId }: ICreateUserDTO): Promise<void> {
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

export { PrismaUsersRespository };