import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticationUseCase } from './AuthenticationUseCase';

class AuthenticationController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;

		const authenticationUseCase = container.resolve(AuthenticationUseCase);
		const token = await authenticationUseCase.execute({ email, password });
		const splitToken = token.split('.');

		res.cookie('hp', `${splitToken[0]}.${splitToken[1]}`, { 
            expires: new Date(Date.now() + 12 * 3600000), 
            path: '/' 
        });

        res.cookie('sg', splitToken[2], { 
            expires: new Date(Date.now() + 12 * 3600000), 
            path: '/' 
        });

		return res.status(200).json({
			success: true,
			message: 'User has been logged successfully.'
		});
	}
}

export { AuthenticationController };