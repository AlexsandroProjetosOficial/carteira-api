import { inject, injectable } from "tsyringe";
import { resolve } from "path";
import { AppError } from "@errors/AppError";
import { generateTokenResetPassword } from "@utils/generateTokenResetPassword";
import { IMail } from "types/mail/IMail";
import { IUserRepository } from "types/user/IUserRepository";

@injectable()
class ForgotPasswordUseCase {
	constructor(
		@inject('User')
		private user: IUserRepository,

		@inject('Mail')
		private mail: IMail
	) { }

	async execute(email: string): Promise<void> {
		const user = await this.user.findUserByEmail(email);

		if (!user) {
			throw new AppError(`User doesn't exist.`);
		}

		const templatePath = resolve(__dirname, '..', '..', '..', '..', 'views', 'forgotPassword.hbs');

		const token = await generateTokenResetPassword(email);

		const variables = {
			name: `${user.firstName} ${user.lastName}`,
			link: `${process.env.FORGOT_MAIL_URL}/${token}`,
			token
		}

		await this.mail.sendMail({
			to: email,
			subject: 'Password recovery',
			variables,
			path: templatePath

		});
	}
}

export { ForgotPasswordUseCase };