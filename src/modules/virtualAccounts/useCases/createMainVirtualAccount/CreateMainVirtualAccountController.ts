import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMainVirtualAccountUseCase } from './CreateMainVirtualAccountUseCase';

class CreateMainVirtualAccountController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { firstName, lastName, email, password, virtualAccountName } = req.body;

		const createMainVirtualAccoutUseCase = container.resolve(CreateMainVirtualAccountUseCase);

		await createMainVirtualAccoutUseCase.execute({
			user: {
				firstName,
				lastName,
				email,
				password
			},
			name: virtualAccountName
		});

		return res.status(201).json({
			success: true,
			message: 'Virtual account has been created successfully.'
		});
	};
};

export { CreateMainVirtualAccountController };