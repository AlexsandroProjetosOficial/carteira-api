import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { signedCookie } from "cookie-parser";
import { AppError } from "@errors/AppError";
import { generateToken } from "@utils/generateToken";
import { IAuthentication } from "types/middleware/IAuthentication";

const ensureRenewSessionToken = async (req: Request, res: Response, next: NextFunction) => {
	const cookieHp = signedCookie(req.signedCookies.hp, process.env.PRIVATE_KEY_COOKIES);
	const cookieSg = signedCookie(req.signedCookies.sg, process.env.PRIVATE_KEY_COOKIES);

	if (!!cookieHp && !!cookieSg) {
		const token = `${cookieHp}.${cookieSg}`;

		try {
			const { id, virtualAccountId } = verify(token, process.env.PRIVATE_KEY) as IAuthentication;

			const newToken = await generateToken({ id, virtualAccountId });
			const splitToken = newToken.split('.');

			res.cookie('hp', `${splitToken[0]}.${splitToken[1]}`, {
				expires: new Date(Date.now() + 12 * 3600000),
				signed: true,
				path: '/'
			});

			res.cookie('sg', splitToken[2], {
				expires: new Date(Date.now() + 12 * 3600000),
				signed: true,
				path: '/'
			});
		} catch (error) {
			res.clearCookie("hp");
			res.clearCookie("sg");
			throw new AppError(`Token invalid`, 401);
		};
	};

	next();
}

export { ensureRenewSessionToken };