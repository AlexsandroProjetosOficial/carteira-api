import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { AppError } from "@errors/AppError";
import { ISystemDTO } from "@modules/systems/dtos/ISystemDTO";
import { ISystemsRepositoryDTO } from "@modules/systems/dtos/ISystemsRepositoryDTO";
import { IUsersRepositoryDTO } from "@modules/userAccounts/dtos/users/IUsersRepositoryDTO";

@injectable()
class ChangePasswordUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepositoryDTO,

		@inject('SystemsRepository')
		private systemsRepository: ISystemsRepositoryDTO
	) { }

	async execute({ email, password }: ISystemDTO): Promise<void> {
		const user = await this.usersRepository.findByEmail(email);

		if(!user) {
			throw new AppError(`User doesn't exist in our system.`);
		}

		const passwordHash = await hash(password, 8);

		const isChangedPassword = await this.systemsRepository.updatePassordByEmail({ email, password: passwordHash });

		if(!isChangedPassword) {
			throw new AppError(`Password not changed, try again later.`);
		}
	}
}

export { ChangePasswordUseCase };