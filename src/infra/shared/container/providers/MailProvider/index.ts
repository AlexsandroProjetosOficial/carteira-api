import { container } from "tsyringe";
import { IMailProviderDTO } from "./dtos/IMailProviderDTO";
import { MailTrapMailProvider } from "./implementations/MailTrapMailProvider";

const mailProvider = {
	mailTrap: container.resolve(MailTrapMailProvider)
}

container.registerInstance<IMailProviderDTO>('MailProvider', mailProvider[process.env.MAIL_PROVIDER]);