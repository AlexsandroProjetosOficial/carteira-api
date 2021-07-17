import * as yup from 'yup';
import { Request, Response } from "express";
import { VerificationTokenUserService } from '../../services/authenticate/VerificationTokenUserService';

class VerificationTokenUserController {
    async handle(req: Request, res: Response) {
        const token = req.params.token;

        const schema = yup.object().shape({
            token: yup.string().required('Token is not send.')
        });

        await schema.validate({
            token: token
        }).catch((err) => {
            throw new Error(err.errors);
        });

        const verificationTokenUserService = new VerificationTokenUserService();

        const isValid = await verificationTokenUserService.execute({ token });

        return res.status(200).json({
            message: 'Token is valid.',
            isValid
        });
    }
}

export { VerificationTokenUserController };