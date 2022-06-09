import { ICreateMainVirtualAccount } from "./ICreateMainVirtualAccount";
import { ICreateVirtualAccount } from "./ICreateVirtualAccount";
import { IVirtualAccount } from "./IVirtualAccount";

interface IVirtualAccountRepository {
	findVirtualAccountByName(virtualAccountName: string): Promise<IVirtualAccount>;
	findVirtualAccountById(virtualAccountId: string): Promise<IVirtualAccount>;
	createMainVirtualAccount(props: ICreateMainVirtualAccount): Promise<void>;
	createVirtualAccount(props: ICreateVirtualAccount): Promise<void>;
	findVirtualAccountsByUserId(userId: string): Promise<IVirtualAccount[]>;
};

export { IVirtualAccountRepository };