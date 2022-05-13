import { ICreateUserDTO } from "./ICreateUserDTO";
import { IUserDTO } from "./IUserDTO";

interface IUsersRepositoryDTO {
	createUser(props: ICreateUserDTO): Promise<void>;
	findByEmail(email: string): Promise<IUserDTO>;
}

export { IUsersRepositoryDTO };