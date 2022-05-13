import { sign } from "jsonwebtoken";
import { IGenerateTokenDTO } from "./dtos/IGenerateTokenDTO";

const generateToken = async ({ id, virtualAccountId }: IGenerateTokenDTO): Promise<string> => {
	const token = sign({
		id,
		virtualAccountId
	}, process.env.PRIVATE_KEY, { expiresIn: '8h' });

	return token;
};

export { generateToken };