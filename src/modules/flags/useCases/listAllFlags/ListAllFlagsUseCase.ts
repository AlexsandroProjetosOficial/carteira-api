import { inject, injectable } from "tsyringe";
import { IFlagsDTO } from "@modules/flags/dtos/IFlagsDTO";
import { IFlagsRepositoryDTO } from "@modules/flags/dtos/IFlagsRepositoryDTO";
import { AppError } from "@errors/AppError";

@injectable()
class ListAllFlagsUseCase {
	constructor(
		@inject('FlagsRepository')
		private flagsRepository: IFlagsRepositoryDTO
	) { }

	async execute(): Promise<IFlagsDTO[]> {
		const flagsAll = await this.flagsRepository.listAllFlags();

		if(flagsAll.length === 0) {
			throw new AppError(`No flags registered.`);
		}

		return flagsAll;
	}
}

export { ListAllFlagsUseCase };