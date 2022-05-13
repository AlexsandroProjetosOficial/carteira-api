import path from "path";
import { readFileSync } from "fs";
import { sign } from "jsonwebtoken";
import { IGenerateTokenDTO } from "./dtos/IGenerateTokenDTO";

const generateToken = async ({ id, virtualAccountId }: IGenerateTokenDTO): Promise<string> => {
	const privateKey = readFileSync(path.join(__dirname, '..', '..', 'src/configs/certs/jwtRS256.key'));

	const token = sign({
		id,
		virtualAccountId
	}, privateKey, { expiresIn: '8h', algorithm: 'RS256'});

	return token;
};

export { generateToken };