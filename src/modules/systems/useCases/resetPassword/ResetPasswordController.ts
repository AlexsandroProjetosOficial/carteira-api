import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ResetPasswordUseCase } from './ResetPasswordUseCase';

class ResetPasswordController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { password } = req.body;
		const { email } = req.user;

		const changePasswordUseCase = container.resolve(ResetPasswordUseCase);

		await changePasswordUseCase.execute({ email, password });

		return res.status(200).json({
			success: true,
			message: 'Your password change was been successfully.'
		});
	};
};

export { ResetPasswordController };