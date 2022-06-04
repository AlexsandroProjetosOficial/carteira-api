import { container } from "tsyringe";
import { User } from "@repositories/prisma/User";
import { IUserRepository } from "types/user/IUserRepository";

container.registerSingleton<IUserRepository>('User', User);