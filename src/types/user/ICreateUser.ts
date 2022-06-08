interface ICreateUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	isAdmin?: boolean;
    nickName?: string;
    birthday?: string;
    phone?: string;
    avatar?: string;
    cpf?: string;
};

export { ICreateUser };