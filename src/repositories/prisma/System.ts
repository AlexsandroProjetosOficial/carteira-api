import { prisma } from "@database/prisma";
import { ISystem } from "types/system/ISystem";
import { ISystemRepository } from "types/system/ISystemRepository";

class System implements ISystemRepository {
	async updatePassordByEmail({ email, password }: ISystem): Promise<boolean> {
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

export { System };