import { ICreateUserAdmin } from "types/user/ICreateUserAdmin";

interface ICreateMainVirtualAccount {
	code: string;
	name: string;
	user: ICreateUserAdmin;
};

export { ICreateMainVirtualAccount };