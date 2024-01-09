'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = ({ name }: { name: string }) => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			aria-disabled={pending}
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		>
			{name}
		</button>
	);
};

export default SubmitButton;
