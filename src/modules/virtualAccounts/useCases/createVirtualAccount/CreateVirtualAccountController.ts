import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateVirtualAccountUseCase } from './CreateVirtualAccountUseCase';

class CreateVirtualAccountController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { virtualAccountName, userId } = req.body;

		const createVirtualAccoutUseCase = container.resolve(CreateVirtualAccountUseCase);

		await createVirtualAccoutUseCase.execute({
			userId,
			name: virtualAccountName
		});

		return res.status(201).json({
			success: true,
			message: 'Virtual account has been created successfully.'
		});
	};
};

export { CreateVirtualAccountController };