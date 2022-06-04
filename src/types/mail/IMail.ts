import { ISendMail } from "./ISendMail";

interface IMail {
	sendMail(data: ISendMail): Promise<void>;
};

export { IMail };