interface ISendMail {
	to: string;
	subject: string;
	variables: any;
	path: string;
};

export { ISendMail };