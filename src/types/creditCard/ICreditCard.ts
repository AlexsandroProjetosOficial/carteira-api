interface ICreditCard {
	id: string;
	cardNumber: string;
	creditCardName: string;
	securityCode: number;
	sinceMember: string;
	validThru: string;
	limit: number;
	expirationDay: number;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
	status: number;
	flagId: string;
};

export { ICreditCard };