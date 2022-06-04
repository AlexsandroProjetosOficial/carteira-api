import { ICreateUser } from "./ICreateUser";
import { IUser } from "./IUser";

interface IUserRepository {
	createUser(props: ICreateUser): Promise<void>;
	findByEmail(email: string): Promise<IUser>;
}

export { IUserRepository };