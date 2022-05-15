import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase';

class ForgotPasswordController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { email } = req.body;

		const forgotPasswordUseCase = container.resolve(ForgotPasswordUseCase);

		await forgotPasswordUseCase.execute(email);

		return res.status(200).json({
			success: true,
			message: 'E-mail sent was been succesfully.'
		});
	};
};

export { ForgotPasswordController };