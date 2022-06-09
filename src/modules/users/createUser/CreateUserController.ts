import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { firstName, lastName, email, virtualAccountId } = req.body;

		const createUserUseCase = container.resolve(CreateUserUseCase);

		await createUserUseCase.execute({ firstName, lastName, email, virtualAccountId });

		return res.status(201).json({
			success: true,
			message: 'User has been created successfully.'
		});
	}
}

export { CreateUserController };