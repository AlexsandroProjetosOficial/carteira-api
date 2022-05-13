import { UserInMemory } from "@entities/in-memory/UserInMemory";
import { ICreateUserDTO } from "@modules/userAccounts/dtos/users/ICreateUserDTO";
import { IUserDTO } from "@modules/userAccounts/dtos/users/IUserDTO";
import { IUsersRepositoryDTO } from "@modules/userAccounts/dtos/users/IUsersRepositoryDTO";

class UsersRepositoryInMemory implements IUsersRepositoryDTO {
	users: UserInMemory[] = [];

	async createUser({ firstName, lastName, email, password, virtualAccountId }: ICreateUserDTO): Promise<void> {
		const user = new UserInMemory();

		Object.assign(user, {
			firstName,
			lastName,
			email,
			password,
			virtualAccountId
		});

		this.users.push(user)
	};

	async findByEmail(email: string): Promise<IUserDTO> {
		return this.users.find((user) => user.email === email);
	};
}

export { UsersRepositoryInMemory };