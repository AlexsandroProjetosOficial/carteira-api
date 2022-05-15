import { AppError } from '@errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IPayloadTokenResetPassword } from './dtos/IPayloadTokenResetPassword';

const ensureValidateTokenResetPassword = async (req: Request, res: Response, next: NextFunction) => {
	const { token } = req.body;

	if (!token) {
		throw new AppError(`Token missing`, 401);
	};

	try {
		const { email } = verify(token, process.env.PRIVATE_KEY_RESET_PASSWORD) as IPayloadTokenResetPassword;

		req.user = {
			email
		}

		next();
	} catch (error) {
		throw new AppError(`Token missing`, 401);
	}
}

export { ensureValidateTokenResetPassword };