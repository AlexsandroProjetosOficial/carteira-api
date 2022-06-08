import { ICreateUser } from "./ICreateUser";
import { IUser } from "./IUser";

interface IUserRepository {
	createAdminUser(props: ICreateUser): Promise<string>;
	findUserByEmail(email: string): Promise<IUser>;
}

export { IUserRepository };