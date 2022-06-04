import { v4 as UUIDV4 } from 'uuid';

class VirtualAccount {
	id: string;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    status: number;

	constructor() {
		if(!this.id) {
			this.id = UUIDV4();
			this.createdAt = new Date();
			this.updatedAt = new Date();
			this.deletedAt = null;
			this.status = 1
		}
	}
}

export { VirtualAccount }