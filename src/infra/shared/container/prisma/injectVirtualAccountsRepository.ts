import { container } from "tsyringe";
import { IVirtualAccountsRepositoryDTO } from "@modules/userAccounts/dtos/virtualAccounts/IVirtualAccountsRepositoryDTO";
import { PrismaVirtualAccountsRepository } from "@repositories/prisma/PrismaVirtualAccountsRepository";

container.registerSingleton<IVirtualAccountsRepositoryDTO>('VirtualAccountsRepository', PrismaVirtualAccountsRepository);