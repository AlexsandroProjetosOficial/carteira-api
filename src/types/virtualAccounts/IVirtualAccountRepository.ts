import { ICreateVirtualAccount } from "./ICreateVirtualAccount";
import { IVirtualAccount } from "./IVirtualAccount";

interface IVirtualAccountRepository {
	findByName(virtualAccountName: string): Promise<IVirtualAccount>;
	createVirtualAccount(props: ICreateVirtualAccount): Promise<string>;
};

export { IVirtualAccountRepository };