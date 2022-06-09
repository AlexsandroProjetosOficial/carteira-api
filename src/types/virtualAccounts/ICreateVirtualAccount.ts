import { ICreateUser } from "types/user/ICreateUser";

interface ICreateVirtualAccount {
	code?: string;
	name: string;
	user?: ICreateUser;
};

export { ICreateVirtualAccount };