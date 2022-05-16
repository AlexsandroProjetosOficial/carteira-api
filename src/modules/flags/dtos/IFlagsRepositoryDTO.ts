import { IFlagsDTO } from "./IFlagsDTO";

interface IFlagsRepositoryDTO {
	createFlag(name: string): Promise<void>;
	listAllFlags(): Promise<IFlagsDTO[]>;
	listFlag(name: string): Promise<IFlagsDTO>;
};

export { IFlagsRepositoryDTO };