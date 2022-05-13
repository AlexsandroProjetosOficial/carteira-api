import { ICreateVirtualAccountDTO } from "./ICreateVirtualAccountDTO";
import { IVirtualAccountDTO } from "./IVirtualAccountDTO";

interface IVirtualAccountsRepositoryDTO {
	findByName(virtualAccountName: string): Promise<IVirtualAccountDTO>;
	createVirtualAccount(props: ICreateVirtualAccountDTO): Promise<string>;
};

export { IVirtualAccountsRepositoryDTO };