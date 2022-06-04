import { ISystem } from "./ISystem";

interface ISystemRepository {
	updatePassordByEmail({ email, password }: ISystem): Promise<boolean>;
};

export { ISystemRepository };