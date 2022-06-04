interface ICreateCreditCard {
	cardNumber: string;
	creditCardName: string;
	securityCode: number;
	sinceMember: string;
	validThru: string;
	limit: number;
	expirationDay: number;
	flagId: string;
	virtualAccountId: string;
};

export { ICreateCreditCard };