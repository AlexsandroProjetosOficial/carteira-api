import { container } from "tsyringe";
import { VirtualAccount } from "@repositories/prisma/VirtualAccount";
import { IVirtualAccountRepository } from "types/virtualAccounts/IVirtualAccountRepository";

container.registerSingleton<IVirtualAccountRepository>('VirtualAccount', VirtualAccount);