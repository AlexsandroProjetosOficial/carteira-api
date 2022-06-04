import { ICheckCreditCardExist } from "./ICheckCreditCardExist";
import { ICreateCreditCard } from "./ICreateCreditCard";
import { ICreditCard } from "./ICreditCard";
import { IListCreditCard } from "./IListCreditCard";

interface ICreditCardRepository {
	createCreditCard(props: ICreateCreditCard): Promise<boolean>;
	listCreditCard(props: IListCreditCard): Promise<ICreditCard>;
	listAllCreditCard(virtualAccountId: string): Promise<ICreditCard[]>
	checkCreditCardExist(props: ICheckCreditCardExist): Promise<boolean>;
};

export { ICreditCardRepository };