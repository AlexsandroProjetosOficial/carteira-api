import { container } from "tsyringe";
import { IMail } from "types/mail/IMail";
import { MailTrapMailProvider } from "./implementations/MailTrapMailProvider";

const mailProvider = {
	mailTrap: container.resolve(MailTrapMailProvider)
}

container.registerInstance<IMail>('Mail', mailProvider[process.env.MAIL_PROVIDER]);