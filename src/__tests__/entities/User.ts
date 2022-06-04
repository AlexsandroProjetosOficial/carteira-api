import { v4 as UUIDV4 } from 'uuid';

class User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	nickName: string;
	birthday: Date;
	phone: string;
	avatar: string;
	cpf: string;
	isAdmin: boolean;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
	status: number;
	virtualAccountId: string;

	constructor() {
		if (!this.id) {
			this.id = UUIDV4();
			this.nickName = null; 
			this.birthday = null;
			this.phone = null;
			this.avatar = null;
			this.cpf = null;
			this.isAdmin = true;
			this.createdAt = new Date();
			this.updatedAt = new Date();
			this.deletedAt = null;
			this.status = 1
		}
	}
}

export { User };