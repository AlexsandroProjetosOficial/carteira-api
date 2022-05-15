interface ISendMailProviderDTO {
	to: string;
	subject: string;
	variables: any;
	path: string;
};

export { ISendMailProviderDTO };