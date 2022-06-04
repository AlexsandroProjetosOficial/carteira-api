import { container } from "tsyringe";
import { System } from "@repositories/prisma/System";
import { ISystemRepository } from "types/system/ISystemRepository";

container.registerSingleton<ISystemRepository>('System', System);