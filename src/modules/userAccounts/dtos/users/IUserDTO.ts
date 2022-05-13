interface IUserDTO {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	nickName: string;
	birthday: Date;
	phone: string;
	avatar: string;
	isAdmin: boolean;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
	status: Number
	virtualAccountId: string;
}

export { IUserDTO };