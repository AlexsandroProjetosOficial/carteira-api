import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/userAccounts/dtos/users/ICreateUserDTO";
import { CreateUserUseCase } from "@modules/userAccounts/useCases/createUser/CreateUserUseCase";
import { UsersRepositoryInMemory } from "@repositories/in-memory/userAccounts/UsersRepositoryInMemory";
import { VirtualAccountRepositoryInMemory } from "@repositories/in-memory/userAccounts/VirtualAccountRepositoryInMemory";
import { AuthenticationUseCase } from "./AuthenticationUseCase";

describe('User authentication', () => {
	let createUserUseCase: CreateUserUseCase;
	let usersRepositoryInMemory: UsersRepositoryInMemory;
	let virtualAccountRepositoryInMemory: VirtualAccountRepositoryInMemory;
	let authenticationUseCase: AuthenticationUseCase;

	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		virtualAccountRepositoryInMemory = new VirtualAccountRepositoryInMemory();
		createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory, virtualAccountRepositoryInMemory);
		authenticationUseCase = new AuthenticationUseCase(usersRepositoryInMemory)
	});

	it('Should be able to authenticate an user', async () => {
		const user: ICreateUserDTO = {
			firstName: 'Teste',
			lastName: 'Teste teste',
			email: 'teste@teste.com',
			password: '123',
			virtualAccountName: 'teste'
		};

		await createUserUseCase.execute(user);

		const authenticated = await authenticationUseCase.execute({ email: 'teste@teste.com', password: '123' });

		expect(authenticated).toBe(authenticated);
	});

	it("should not be able to authentication an user does not exist by email", async () => {
		const user: ICreateUserDTO = {
			firstName: 'Teste',
			lastName: 'Teste teste',
			email: 'teste@teste.com',
			password: '123',
			virtualAccountName: 'teste'
		};

		await createUserUseCase.execute(user);

		await expect(authenticationUseCase.execute({
			email: 'outroemail@teste.com',
			password: '123'
		})).rejects.toEqual(new AppError('E-mail or password incorrect.'));
	});

	it("should not be able to authentication an user does not exist by password", async () => {
		const user: ICreateUserDTO = {
			firstName: 'Teste',
			lastName: 'Teste teste',
			email: 'teste@teste.com',
			password: '123',
			virtualAccountName: 'teste'
		};

		await createUserUseCase.execute(user);

		await expect(authenticationUseCase.execute({
			email: 'teste@teste.com',
			password: '12'
		})).rejects.toEqual(new AppError('E-mail or password incorrect.'));
	});
});