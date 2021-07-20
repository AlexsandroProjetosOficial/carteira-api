import { getCustomRepository } from "typeorm";
import { AddressesRepositories } from "../../repositories/AddressesRepositories";

interface IAddressUserRequest {
    id_state: string;
    id_city: string;
    id_user?: string;
    id_company?: string;
    street: string;
    zip_code: string;
    number: string;
    complement: string | null;
    district: string;
    country: string;
}

class CreateAddressService {
    async execute({
        id_state,
        id_city,
        id_user,
        id_company,
        street,
        zip_code,
        number,
        complement,
        district,
        country
    }: IAddressUserRequest) {
        const addressRepository = getCustomRepository(AddressesRepositories);

        let addressAlreadyExists = undefined;

        if(id_user) {
            addressAlreadyExists = await addressRepository.findOne({ id_user });
        } else {
            addressAlreadyExists = await addressRepository.findOne({ id_company });
        }

        if (addressAlreadyExists) {
            throw new Error('Address alredy exists for this User.')
        }

        const address = addressRepository.create({
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

        await addressRepository.save(address);

        return address;
    }
}

export { CreateAddressService };