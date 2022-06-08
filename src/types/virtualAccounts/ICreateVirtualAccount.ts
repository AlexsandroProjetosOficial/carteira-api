import { ICreateUser } from "types/user/ICreateUser";

interface ICreateVirtualAccount {
	code?: string;
	name: string;
	userId?: string;
	user?: ICreateUser;
};

export { ICreateVirtualAccount };