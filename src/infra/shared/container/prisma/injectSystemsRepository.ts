import { container } from "tsyringe";
import { ISystemsRepositoryDTO } from "@modules/systems/dtos/ISystemsRepositoryDTO";
import { PrismaSystemsRepository } from "@repositories/prisma/PrismaSystemsRepository";

container.registerSingleton<ISystemsRepositoryDTO>('SystemsRepository', PrismaSystemsRepository);