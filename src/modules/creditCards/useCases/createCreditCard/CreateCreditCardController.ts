import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCreditCardUseCase } from './CreateCreditCardUseCase';

class CreateCreditCardController {
	async handle(req: Request, res: Response): Promise<Response> {
		const {
			cardNumber,
			creditCardName,
			expirationDay,
			securityCode,
			limit,
			sinceMember,
			validThru,
			flagId,
			virtualAccountId
		} = req.body;

		const createCreditCardUseCase = container.resolve(CreateCreditCardUseCase);

		await createCreditCardUseCase.execute({
			cardNumber,
			creditCardName,
			expirationDay,
			securityCode,
			limit,
			sinceMember,
			validThru,
			virtualAccountId,
			flagId
		});

		return res.status(201).json({
			success: true,
			message: 'Credit card has been created successfully.'
		});
	}
}

export { CreateCreditCardController };