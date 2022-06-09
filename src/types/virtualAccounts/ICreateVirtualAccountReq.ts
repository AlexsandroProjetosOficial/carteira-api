import { ICreateUser } from "types/user/ICreateUser";

interface ICreateVirtualAccountReq {
	name: string;
	user: ICreateUser;
};

export { ICreateVirtualAccountReq };