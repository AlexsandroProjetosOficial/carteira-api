import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ChangePasswordUseCase } from './ChangePasswordUseCase';

class ChangePasswordController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;

		const changePasswordUseCase = container.resolve(ChangePasswordUseCase);

		await changePasswordUseCase.execute({ email, password });

		return res.status(200).json({
			success: true,
			message: 'Changed password has been successfully.'
		});
	};
};

export { ChangePasswordController };