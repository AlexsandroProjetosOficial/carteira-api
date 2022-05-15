import { sign } from "jsonwebtoken";

const generateTokenResetPassword = async (email: string): Promise<string> => {
	return sign({ email }, process.env.PRIVATE_KEY_RESET_PASSWORD, { expiresIn: '3h' });
};

export { generateTokenResetPassword };