import { AppError } from "@errors/AppError";
import { inject, injectable } from "tsyringe";
import { IFlagRepository } from "types/flag/IFlagRepository";

@injectable()
class CreateFlagUseCase {
	constructor(
		@inject('Flag')
		private flag: IFlagRepository
	) { }

	async execute(name: string): Promise<void> {
		const flag = await this.flag.listFlag(name);

		if(flag) {
			throw new AppError(`Flag already exist.`);
		}

		await this.flag.createFlag(name);
	}
}

export { CreateFlagUseCase };