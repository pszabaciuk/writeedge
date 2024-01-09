import React, { ReactNode } from 'react';

type InputFieldProps = {
	title: string;
	children: ReactNode;
};

const InputField = ({ title, children }: InputFieldProps) => {
	return (
		<div className="mb-6">
			<label className="block font-bold mb-2">{title}</label>
			{children}
		</div>
	);
};

export default InputField;
