import { verify } from "jsonwebtoken";

interface ITokenRequest {
    token: string;
}

class VerificationTokenUserService {
    async execute({ token }: ITokenRequest) {
        const isValid = verify(token, process.env.KEY_PRIVATE_TOKEN);

        if(!isValid) {
            throw new Error('Token is invalid.');
        }

        return !!isValid;
    }
}

export { VerificationTokenUserService };