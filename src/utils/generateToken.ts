import { sign } from "jsonwebtoken";
import { IGenerateTokenDTO } from "./dtos/IGenerateTokenDTO";

const generateToken = async ({ id, virtualAccountId }: IGenerateTokenDTO): Promise<string> => {
	return sign({ id, virtualAccountId }, process.env.PRIVATE_KEY, { expiresIn: '1m' });
};

export { generateToken };