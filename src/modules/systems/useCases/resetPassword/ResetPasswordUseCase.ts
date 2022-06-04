import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { AppError } from "@errors/AppError";
import { ISystemRepository } from "types/system/ISystemRepository";
import { ISystem } from "types/system/ISystem";
import { IUserRepository } from "types/user/IUserRepository";

@injectable()
class ResetPasswordUseCase {
	constructor(
		@inject('User')
		private user: IUserRepository,

		@inject('System')
		private system: ISystemRepository
	) { }

	async execute({ email, password }: ISystem): Promise<void> {
		const user = await this.user.findByEmail(email);

		if(!user) {
			throw new AppError(`User doesn't exist in our system.`);
		}

		const passwordHash = await hash(password, 8);

		const isChangedPassword = await this.system.updatePassordByEmail({ email, password: passwordHash });

		if(!isChangedPassword) {
			throw new AppError(`Password not changed, try again later.`);
		}
	}
}

export { ResetPasswordUseCase };