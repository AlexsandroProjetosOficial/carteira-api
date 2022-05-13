import { prisma } from "@database/prisma";
import { ISystemDTO } from "@modules/systems/dtos/ISystemDTO";
import { ISystemsRepositoryDTO } from "@modules/systems/dtos/ISystemsRepositoryDTO";

class PrismaSystemsRepository implements ISystemsRepositoryDTO {
	async updatePassordByEmail({ email, password }: ISystemDTO): Promise<boolean> {
		const user = await prisma.user.update({
			data: {
				password
			},
			where: {
				email
			}
		});

		return !!user
	};
}

export { PrismaSystemsRepository };