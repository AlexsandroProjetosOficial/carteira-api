import { container } from "tsyringe";
import { Flag } from "@repositories/prisma/Flag";
import { IFlagRepository } from "types/flag/IFlagRepository";

container.registerSingleton<IFlagRepository>('Flag', Flag);