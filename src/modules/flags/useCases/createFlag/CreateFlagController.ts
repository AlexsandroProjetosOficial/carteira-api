import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateFlagUseCase } from './CreateFlagUseCase';

class CreateFlagController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { name } = req.body;

		const createFlagUseCase = container.resolve(CreateFlagUseCase);

		await createFlagUseCase.execute(name);

		return res.status(201).json({
			success: true,
			message: `Flag registered has been successfully.`
		});
	};
};

export { CreateFlagController };