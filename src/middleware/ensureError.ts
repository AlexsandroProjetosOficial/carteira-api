import { AppError } from "@errors/AppError";
import { NextFunction, Request, Response } from "express";

const ensureError = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            error: error.message
        });
    }

    return res.status(500).json({
        status: 'Error',
        message: `Internal Server Error. - ${error.message}`
    });
}

export { ensureError };