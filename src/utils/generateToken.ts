import { sign } from "jsonwebtoken";

const generateToken = async (id: string): Promise<string> => sign({ id }, process.env.PRIVATE_KEY, { expiresIn: '4h' });

export { generateToken };