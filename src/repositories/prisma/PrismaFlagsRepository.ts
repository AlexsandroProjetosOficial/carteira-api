import { prisma } from "@database/prisma";
import { IFlagsDTO } from "@modules/flags/dtos/IFlagsDTO";
import { IFlagsRepositoryDTO } from "@modules/flags/dtos/IFlagsRepositoryDTO";

class PrismaFlagsRepository implements IFlagsRepositoryDTO{
	async listFlag(name: string): Promise<IFlagsDTO> {
		const flag = await prisma.flag.findFirst({
			where: {
				name: name,
				status: 1
			}
		});

		return flag;
	}

	async listAllFlags(): Promise<IFlagsDTO[]> {
		const flags = await prisma.flag.findMany({
			where: {
				status: 1
			}
		});

		return flags;
	};

	async createFlag(name: string): Promise<void> {
		await prisma.flag.create({
			data: {
				name
			}
		});
	};
};

export { PrismaFlagsRepository };