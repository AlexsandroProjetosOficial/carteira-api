import { sign } from "jsonwebtoken";
import { IGenerateToken } from "types/util/IGenerateToken";

const generateToken = async ({ id, virtualAccountId }: IGenerateToken): Promise<string> => {
	return sign({ id, virtualAccountId }, process.env.PRIVATE_KEY, { expiresIn: '4h' });
};

export { generateToken };