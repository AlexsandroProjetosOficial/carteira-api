interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	cpf: string;
	nickName: string;
	birthday: Date;
	phone: string;
	avatar: string;
	isAdmin: boolean;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
	status: Number
}

export { IUser };