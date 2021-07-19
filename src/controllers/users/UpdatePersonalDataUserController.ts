import * as yup from 'yup';
import { Request, Response } from "express";
import { UpdatePersonalDataUserService } from "../../services/users/UpdatePersonalDataUserService"

class UpdatePersonalDataUserController {
    async handle(req: Request, res: Response) {
        const { first_name, last_name, cpf, phone, phone_cell, nick_name, birthday } = req.body;
        const id = req.params.id;

        const schema = yup.object().shape({
            id: yup.string().required('The ID is required.'),
            first_name: yup.string().required('The first name is required.'), 
            last_name: yup.string().required('The last name is required.'), 
            cpf: yup.string().required('The CPF is required.'), 
            phone: yup.number().required('The Phone is required.'), 
            phone_cell: yup.number().required('The Phone Cell is required.'), 
            nick_name: yup.string().required('The nick name is required.'), 
            birthday: yup.date().required('The birthday is required.')
        });

        await schema.validate({
            id,
            first_name, 
            last_name, 
            cpf, 
            phone, 
            phone_cell, 
            nick_name, 
            birthday
        }).catch((err) => {
            throw new Error(err.errors);
        });

        const updatePersolnalDataUserService = new UpdatePersonalDataUserService();

        const user = await updatePersolnalDataUserService.execute({
            id,
            first_name, 
            last_name, 
            cpf, 
            phone, 
            phone_cell, 
            nick_name, 
            birthday
        });

        return res.status(200).json({
            message: 'Personal data has been updated successfully',
            user: !!user
        });
    } 
}

export { UpdatePersonalDataUserController }