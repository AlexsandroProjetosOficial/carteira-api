import { AppError } from "@errors/AppError";
import { IFlagsRepositoryDTO } from "@modules/flags/dtos/IFlagsRepositoryDTO";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateFlagUseCase {
	constructor(
		@inject('FlagsRepository')
		private flagsRepository: IFlagsRepositoryDTO 
	) { }

	async execute(name: string): Promise<void> {
		const flag = await this.flagsRepository.listFlag(name);

		if(flag) {
			throw new AppError(`Flag already exist.`);
		}

		await this.flagsRepository.createFlag(name);
	}
}

export { CreateFlagUseCase };