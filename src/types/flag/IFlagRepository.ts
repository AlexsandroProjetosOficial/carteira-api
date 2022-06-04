import { IFlag } from "./IFlag";

interface IFlagRepository {
	createFlag(name: string): Promise<void>;
	listAllFlags(): Promise<IFlag[]>;
	listFlag(name: string): Promise<IFlag>;
};

export { IFlagRepository };