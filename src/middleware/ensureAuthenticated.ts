import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).json({
            message: 'Invalid token!'
        });
    }

    const [bearer, token] = authToken.split(' ');

    if(!bearer) {
        return res.status(401).json({
            message: 'Invalid token!'
        });
    }

    try {
        const { sub } = verify(token, process.env.KEY_PRIVATE_TOKEN) as IPayload;
        
        req.user_id = sub;

        return next()
    } catch (error) {
        return res.json(401).json({
            message: 'Token invalid'
        })
    }
}

export { ensureAuthenticated };