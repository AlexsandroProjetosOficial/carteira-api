import * as yup from 'yup';
import { Request, Response } from "express";
import { CreateAddressService } from '../../services/addresses/CreateAddressService';

class CreateAddressController {
    async handle(req: Request, res: Response) {
        const {
            id_state,
            id_city,
            id_user = null,
            id_company = null,
            street,
            zip_code,
            number,
            complement,
            district,
            country
        } = req.body;

        const schema = yup.object().shape({
            id_state: yup.string().required('The ID State is required.'),
            id_city: yup.string().required('The ID City is required.'),
            id_user: yup.string(),
            id_company: yup.string(),
            street: yup.string().required('The Street is required.'),
            zip_code: yup.string().required('The Street is required.').min(8).max(8),
            number: yup.string().required('The Number is required'),
            complement: yup.string().required('The Complement is required'),
            district: yup.string().required('The District is required'),
            country: yup.string().required('The Country is required').min(2).max(2),
        });

        schema.validate({
            id_state: id_state,
            id_city: id_city,
            id_user: id_user,
            id_company: id_company,
            street: street,
            zip_code: zip_code,
            number: number,
            complement: complement,
            district: district,
            country: country,
        }).catch((err) => {
            throw new Error(err.errors);
        });

        const createAddressService = new CreateAddressService();

        const address = await createAddressService.execute({
            id_state,
            id_city,
            id_user,
            id_company,
            street,
            zip_code,
            number,
            complement,
            district,
            country,
        });

        console.log(address);

        return res.status(201).json({
            message: 'Address has been created successfully',
            address
        });
    }
}

export { CreateAddressController };