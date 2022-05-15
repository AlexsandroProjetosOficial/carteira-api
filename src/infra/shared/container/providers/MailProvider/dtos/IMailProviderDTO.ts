import { ISendMailProviderDTO } from "./ISendMailProviderDTO";

interface IMailProviderDTO {
	sendMail(data: ISendMailProviderDTO): Promise<void>;
};

export { IMailProviderDTO };