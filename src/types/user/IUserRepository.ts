import { IAddUserToVirtualAccount } from "./IAddUserToVirtualAccount";
import { ICreateUser } from "./ICreateUser";
import { IUser } from "./IUser";

interface IUserRepository {
	createUser(props: ICreateUser): Promise<IUser>;
	findUserByEmail(email: string): Promise<IUser>;
	addUserToVirtualAccount(prosp: IAddUserToVirtualAccount): Promise<boolean>;
}

export { IUserRepository };