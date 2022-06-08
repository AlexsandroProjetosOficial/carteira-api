import { ICreateCreditCard } from "./ICreateCreditCard";
import { ICreditCard } from "./ICreditCard";
import { IListCreditCard } from "./IListCreditCard";

interface ICreditCardRepository {
	createCreditCard(props: ICreateCreditCard): Promise<boolean>;
	listCreditCard(props: IListCreditCard): Promise<ICreditCard>;
	listAllCreditCardByVirtualAccountId(virtualAccountId: string): Promise<ICreditCard[]>
};

export { ICreditCardRepository };