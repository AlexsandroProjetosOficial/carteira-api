import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListVirtualAccountsUseCase } from './ListVirtualAccountsUseCase';

class ListVirtualAccountsController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.user;

		const listVirtualAccountsUseCase = container.resolve(ListVirtualAccountsUseCase);

		const virtualAccounts = await listVirtualAccountsUseCase.execute(id);

		return res.status(200).json({
			success: true,
			message: `Virtual accounts selected has been successfully.`,
			virtualAccounts
		});
	}
}

export { ListVirtualAccountsController };