interface IVirtualAccount {
	id: string;
	code: string;
	name: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
	status?: number;
};

export { IVirtualAccount };