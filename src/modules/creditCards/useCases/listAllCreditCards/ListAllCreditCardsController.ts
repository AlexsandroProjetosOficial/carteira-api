import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllCreditCardsUseCase } from './ListAllCreditCardsUseCase';

class ListAllCreditCardsController {
	async handle(req: Request, res: Response): Promise<Response> {
		const virtualAccountId = req.user.virtualAccountId;

		const listAllCreditCardsUseCase = container.resolve(ListAllCreditCardsUseCase);

		const creditCards = await listAllCreditCardsUseCase.execute(virtualAccountId);

		return res.status(200).json({
			success: true,
			message: 'Credit cards selected has been successfully.',
			creditCards
		});
	}
}

export { ListAllCreditCardsController };
