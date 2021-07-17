import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";
import * as yup from 'yup';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { first_name, last_name, email, password } = req.body;
        
        const schema = yup.object().shape({
            first_name: yup.string().required('The first name is required.'),
            last_name: yup.string().required('The last name is required.'),
            email: yup.string().email().required('The email is required.'),
            password: yup.string().required('The password is required.').min(6)
        });

        await schema.validate({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        }).catch((err) => {
            throw new Error(err.errors);
        });

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            first_name,
            last_name,
            email,
            password
        });

        return res.status(201).json({
            message: 'User has been created successfully',
            user
        });
    }
}

export { CreateUserController };

