import { AppError } from "@errors/AppError";
import { NextFunction, Request, Response } from "express";

const ensureError = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
			success: false,
            message: error.message
        });
    }

    return res.status(500).json({
        success: false,
        message: `Internal Server Error. - ${error.message}`
    });
}

export { ensureError };