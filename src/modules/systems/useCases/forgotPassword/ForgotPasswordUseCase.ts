import { inject, injectable } from "tsyringe";
import { resolve } from "path";
import { AppError } from "@errors/AppError";
import { IUsersRepositoryDTO } from "@modules/userAccounts/dtos/users/IUsersRepositoryDTO";
import { generateTokenResetPassword } from "@utils/generateTokenResetPassword";
import { IMailProviderDTO } from "@infra/shared/container/providers/MailProvider/dtos/IMailProviderDTO";

@injectable()
class ForgotPasswordUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepositoty: IUsersRepositoryDTO,

		@inject('MailProvider')
		private mailProvider: IMailProviderDTO
	) { }

	async execute(email: string): Promise<void> {
		const user = await this.usersRepositoty.findByEmail(email);

		if (!user) {
			throw new AppError(`User doesn't exist.`);
		}

		const templatePath = resolve(__dirname, '..', '..', 'views', 'emails', 'forgotPassword.hbs');

		const token = await generateTokenResetPassword(email);

		const variables = {
			name: `${user.firstName} ${user.lastName}`,
			link: `${process.env.FORGOT_MAIL_URL}/${token}`,
			token
		}

		await this.mailProvider.sendMail({
			to: email,
			subject: 'Password recovery',
			variables,
			path: templatePath

		});
	}
}

export { ForgotPasswordUseCase };