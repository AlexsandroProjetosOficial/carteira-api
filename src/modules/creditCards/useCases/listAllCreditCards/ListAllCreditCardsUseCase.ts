import { AppError } from "@errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreditCard } from "types/creditCard/ICreditCard";
import { ICreditCardRepository } from "types/creditCard/ICreditCardRepository";

@injectable()
class ListAllCreditCardsUseCase {
	constructor(
		@inject('CreditCard')
		private creditCardsRepository: ICreditCardRepository
	) { }

	async execute(virtualAccountId: string): Promise<ICreditCard[]> {
		const creditCards = await this.creditCardsRepository.listAllCreditCardByVirtualAccountId(virtualAccountId);

		if(creditCards.length === 0) {
			throw new AppError('Credit cards not exists.');
		}

		return creditCards;
	}
}

export { ListAllCreditCardsUseCase };