import { v4 as UUIDV4 } from 'uuid';
import { AppError } from "@errors/AppError";
import { CreateUserUseCase } from './CreateUserUseCase';
import { UsersRepositoryInMemory } from '@repositories/in-memory/userAccounts/UsersRepositoryInMemory';
import { VirtualAccountRepositoryInMemory } from '@repositories/in-memory/userAccounts/VirtualAccountRepositoryInMemory';

describe('Create user', () => {	
	let createUserUseCase: CreateUserUseCase;
	let usersRepositoryInMemory: UsersRepositoryInMemory;
	let virtualAccountRepositoryInMemory: VirtualAccountRepositoryInMemory; 
	
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		virtualAccountRepositoryInMemory = new VirtualAccountRepositoryInMemory();
		createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory, virtualAccountRepositoryInMemory);
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

		await virtualAccountRepositoryInMemory.createVirtualAccount({ code, name: 'teste' });

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