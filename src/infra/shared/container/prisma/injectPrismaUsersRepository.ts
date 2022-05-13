import { container } from "tsyringe";
import { IUsersRepositoryDTO } from "@modules/userAccounts/dtos/users/IUsersRepositoryDTO";
import { PrismaUsersRespository } from "@repositories/prisma/PrismaUsersRepository";

container.registerSingleton<IUsersRepositoryDTO>('UsersRepository', PrismaUsersRespository);