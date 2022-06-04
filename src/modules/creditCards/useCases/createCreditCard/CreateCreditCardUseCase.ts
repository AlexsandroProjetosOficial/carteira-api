import { AppError } from "@errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateCreditCard } from "types/creditCard/ICreateCreditCard";
import { ICreditCardRepository } from "types/creditCard/ICreditCardRepository";

@injectable()
class CreateCreditCardUseCase {
	constructor(
		@inject('CreditCard')
		private creditCardsRepository: ICreditCardRepository
	) { }

	async execute({
		cardNumber,
		creditCardName,
		expirationDay,
		securityCode,
		limit,
		sinceMember,
		validThru,
		virtualAccountId,
		flagId
	}: ICreateCreditCard): Promise<void> {
		const creditCardExist = await this.creditCardsRepository.checkCreditCardExist({ virtualAccountId, cardNumber, creditCardName });

		console.log(creditCardExist);

		if (creditCardExist) {
			throw new AppError('Credit card already exist.');
		}

		const creditCard = await this.creditCardsRepository.createCreditCard({
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

		if(!creditCard) {
			throw new AppError(`Credit card doesn't registered.`);
		}
	}
}

export { CreateCreditCardUseCase };