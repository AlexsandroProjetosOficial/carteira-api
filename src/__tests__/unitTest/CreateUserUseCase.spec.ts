import { v4 as UUIDV4 } from 'uuid';
import { AppError } from "@errors/AppError";
import { CreateUserUseCase } from '@modules/users/useCases/createUser/CreateUserUseCase';
import { Users } from '../repositories/Users';
import { VirtualAccounts } from '../repositories/VirtualAccounts';

describe('Create user', () => {	
	let createUserUseCase: CreateUserUseCase;
	let user: Users;
	let virtualAccount: VirtualAccounts; 
	
	beforeEach(() => {
		user = new Users();
		virtualAccount = new VirtualAccounts();
		createUserUseCase = new CreateUserUseCase(user, virtualAccount);
	});

	it("should not be able to create an user with exists email", async () => {
		await createUserUseCase.execute({
			firstName: 'Teste',
			lastName: 'Teste teste',
			email: 'teste@teste.com',
			password: '123',
			virtualAccountName: 'teste'
		});

		await expect(createUserUseCase.execute({
			firstName: 'Teste',
			lastName: 'Teste teste',
			email: 'teste@teste.com',
			password: '123',
			virtualAccountName: 'teste'
		})).rejects.toEqual(new AppError("User already exist."));
	});

	it("should not be able to create a virtual account with exist name", async () => {
		const code = `vw${UUIDV4().split('-')[0].toUpperCase()}`;

		await virtualAccount.createVirtualAccount({ code, name: 'teste' });

		await expect(createUserUseCase.execute({
			firstName: 'Teste',
			lastName: 'Teste teste',
			email: 'teste@teste.com',
			password: '123',
			virtualAccountName: 'teste'
		})).rejects.toEqual(new AppError("Virtual account already exist."));
	});

	it('Should be able to create an user', async () => {
		await createUserUseCase.execute({
			firstName: 'Teste',
			lastName: 'Teste teste',
			email: 'teste@teste.com',
			password: '123',
			virtualAccountName: 'teste'
		});
	});
});