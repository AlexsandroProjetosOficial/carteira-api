import { AppError } from "@errors/AppError";
import { AuthenticationUseCase } from "@modules/systems/useCases/authentication/AuthenticationUseCase";
import { ICreateUser } from "types/user/ICreateUser";
import { VirtualAccounts } from "../repositories/VirtualAccounts";
import { Users } from "../repositories/Users";
import { CreateUserUseCase } from "@modules/users/useCases/createUser/CreateUserUseCase";

describe('User authentication', () => {
	let createUserUseCase: CreateUserUseCase;
	let user: Users;
	let virtualAccount: VirtualAccounts;
	let authenticationUseCase: AuthenticationUseCase;

	beforeEach(() => {
		user = new Users();
		virtualAccount = new VirtualAccounts();
		createUserUseCase = new CreateUserUseCase(user, virtualAccount);
		authenticationUseCase = new AuthenticationUseCase(user)
	});

	it('Should be able to authenticate an user', async () => {
		const user: ICreateUser= {
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
		const user: ICreateUser = {
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
		const user: ICreateUser = {
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