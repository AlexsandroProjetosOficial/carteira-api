import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@errors/AppError";
import { signedCookie } from "cookie-parser";
import { IAuthentication } from "types/middleware/IAuthentication";

const ensureAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const cookieHp = signedCookie(req.signedCookies.hp, process.env.PRIVATE_KEY_COOKIES);
	const cookieSg = signedCookie(req.signedCookies.sg, process.env.PRIVATE_KEY_COOKIES);

	if(!!cookieHp === false || !!cookieSg === false) {
		throw new AppError(`Token missing`, 401);
	}

	const token = `${cookieHp}.${cookieSg}`;

	if (!token) {
		throw new AppError(`Token missing`, 401);
	};

	try {
		const { id, virtualAccountId } = verify(token, process.env.PRIVATE_KEY) as IAuthentication;

		req.user = {
			id,
			virtualAccountId
		}

		next();
	} catch (error) {
		throw new AppError(`Token invalid`, 401);
	}
}

export { ensureAuthenticated };