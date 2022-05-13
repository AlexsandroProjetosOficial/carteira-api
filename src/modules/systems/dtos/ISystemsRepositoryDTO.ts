import { ISystemDTO } from "./ISystemDTO";

interface ISystemsRepositoryDTO {
	updatePassordByEmail({ email, password }: ISystemDTO): Promise<boolean>;
};

export { ISystemsRepositoryDTO };