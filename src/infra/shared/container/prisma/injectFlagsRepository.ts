import { container } from "tsyringe";
import { IFlagsRepositoryDTO } from "@modules/flags/dtos/IFlagsRepositoryDTO";
import { PrismaFlagsRepository } from "@repositories/prisma/PrismaFlagsRepository";

container.registerSingleton<IFlagsRepositoryDTO>('FlagsRepository', PrismaFlagsRepository);