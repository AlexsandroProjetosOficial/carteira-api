import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllFlagsUseCase } from './ListAllFlagsUseCase';

class ListAllFlagsController {
	async handle(req: Request, res: Response): Promise<Response> {
		const listAllFlagsUseCase = container.resolve(ListAllFlagsUseCase);

		const listAllFlags = await listAllFlagsUseCase.execute();

		return res.status(200).json({
			success: true,
			message: `Flags selected has been successfully.`,
			listAllFlags
		});
	};
};

export { ListAllFlagsController };