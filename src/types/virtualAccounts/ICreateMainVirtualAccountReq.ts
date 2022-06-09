import { ICreateUserAdmin } from "types/user/ICreateUserAdmin";

interface ICreateMainVirtualAccountReq {
	name: string;
	user: ICreateUserAdmin;
};

export { ICreateMainVirtualAccountReq };