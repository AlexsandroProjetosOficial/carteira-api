import { ICreateUser } from "types/user/ICreateUser";
import { IUser } from "types/user/IUser";
import { IUserRepository } from "types/user/IUserRepository";
import { User } from "../entities/User";

class Users implements IUserRepository {
	users: User[] = [];

	async createUser({ firstName, lastName, email, password, virtualAccountId }: ICreateUser): Promise<void> {
		const user = new User();

		Object.assign(user, {
			firstName,
			lastName,
			email,
			password,
			virtualAccountId
		});

		this.users.push(user)
	};

	async findByEmail(email: string): Promise<IUser> {
		return this.users.find((user) => user.email === email);
	};
}

export { Users };