import { inject, injectable } from "tsyringe";
import { resolve } from "path";
import { AppError } from "@errors/AppError";
import { ICreateUser } from "types/user/ICreateUser";
import { IUserRepository } from "types/user/IUserRepository";
import { generateTokenResetPassword } from "@utils/generateTokenResetPassword";
import { IMail } from "types/mail/IMail";
import { IVirtualAccountRepository } from "types/virtualAccounts/IVirtualAccountRepository";

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('User')
		private user: IUserRepository,

		@inject('Mail')
		private mail: IMail,

		@inject('VirtualAccount')
		private virtualAccount: IVirtualAccountRepository
	) { }

	async execute({ firstName, lastName, email, virtualAccountId }: ICreateUser): Promise<void> {
		const user = await this.user.findUserByEmail(email);

		if (user) {
			const userAdded = await this.user.addUserToVirtualAccount({ 
				userId: user.id,
				virtualAccountId
			});

			if(!userAdded) {
				throw new AppError('Unregistered user.')
			}

			const virtualAccount = await this.virtualAccount.findVirtualAccountById(virtualAccountId);

			const templatePath = resolve(__dirname, '..', '..', '..', '..', 'src', 'views', 'emails', 'welcomeNewUser.hbs');

			const token = await generateTokenResetPassword(email);

			const variables = {
				name: `${user.firstName} ${user.lastName}`,
				link: `${process.env.FORGOT_MAIL_URL}/${token}`,
				codeVirtualAccount: virtualAccount.code,
				nameVirtualAccount: virtualAccount.name,
			}

			await this.mail.sendMail({
				to: email,
				subject: 'Password recovery',
				variables,
				path: templatePath
			});

			return;
		}

		const newUser = await this.user.createUser({
			firstName,
			lastName,
			email,
			virtualAccountId
		});

		if (!newUser) {
			throw new AppError('Unregistered user.');
		}

		const templatePath = resolve(__dirname, '..', '..', '..', '..', 'src', 'views', 'emails', 'welcomeNewUser.hbs');

		const token = await generateTokenResetPassword(email);

		const variables = {
			name: `${newUser.firstName} ${newUser.lastName}`,
			link: `${process.env.FORGOT_MAIL_URL}/${token}`,
			codeVirtualAccount: newUser.UsersVirtualAccounts[0].virtualAccount.code,
			nameVirtualAccount: newUser.UsersVirtualAccounts[0].virtualAccount.name,
		}

		await this.mail.sendMail({
			to: email,
			subject: 'Password recovery',
			variables,
			path: templatePath
		});
	}
}

export { CreateUserUseCase };