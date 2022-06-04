import { prisma } from "@database/prisma";
import { IFlag } from "types/flag/IFlag";
import { IFlagRepository } from "types/flag/IFlagRepository";

class Flag implements IFlagRepository {
	async listFlag(name: string): Promise<IFlag> {
		const flag = await prisma.flag.findFirst({
			where: {
				name: name,
				status: 1
			}
		});

		return flag;
	}

	async listAllFlags(): Promise<IFlag[]> {
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

export { Flag };