import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { IFlagRepository } from "types/flag/IFlagRepository";
import { IFlag } from "types/flag/IFlag";

@injectable()
class ListAllFlagsUseCase {
	constructor(
		@inject('Flag')
		private flag: IFlagRepository
	) { }

	async execute(): Promise<IFlag[]> {
		const flagsList = await this.flag.listAllFlags();

		if(flagsList.length === 0) {
			throw new AppError(`No flags registered.`);
		}

		return flagsList;
	}
}

export { ListAllFlagsUseCase };