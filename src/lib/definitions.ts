export type PostType = {
	id: string;
	title: string;
	date: string;
	image: string;
	content: string;
};

export type FormResult = {
	success: boolean;
	error?: {
		field: string;
		message: string;
	};
};
