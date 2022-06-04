interface ICreateUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	isAdmin?: boolean;
	virtualAccountName?: string;
	virtualAccountId?: string;
};

export { ICreateUser };