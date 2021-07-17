import { Request, Response } from "express";
import * as yup from 'yup';
import { AuthenticateUserService } from "../../services/authenticate/AuthenticateUserService";

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const schema = yup.object().shape({
            email: yup.string().email().required('The email is required.'),
            password: yup.string().required('The password is required.').min(6)
        })

        await schema.validate({
            email: email,
            password: password
        }).catch((err) => {
            throw new Error(err.errors);
        });

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return res.status(200).json({
            message: 'Authentication has been executed successfully',
            token
        });
    }
}

export { AuthenticateUserController }