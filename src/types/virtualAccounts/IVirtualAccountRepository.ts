import { ICreateVirtualAccount } from "./ICreateVirtualAccount";
import { IVirtualAccount } from "./IVirtualAccount";

interface IVirtualAccountRepository {
	findVirtualAccountByName(virtualAccountName: string): Promise<IVirtualAccount>;
	createVirtualAccount(props: ICreateVirtualAccount): Promise<void>;
	findVirtualAccountsByUserId(userId: string): Promise<IVirtualAccount[]>;
};

export { IVirtualAccountRepository };