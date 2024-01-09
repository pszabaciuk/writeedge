'use client';

export type UploadProps = {
	hasError: boolean;
	onUpload: (result: string | null) => void;
};

const UploadFile = ({ hasError, onUpload }: UploadProps) => {
	async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
		if (!event.target.files || event.target.files.length === 0) {
			onUpload(null);
			return;
		}

		const file = event.target.files[0];

		const base64Img = await toBase64(file);
		onUpload(base64Img);
	}

	const toBase64 = (file: File) => {
		return new Promise<string | null>((resolve, reject) => {
			const fileReader = new FileReader();

			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result?.toString() ?? null);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	return (
		<input
			type="file"
			onChange={handleFileUpload}
			className={`${hasError && 'border-red-500 border rounded w-full'}`}
		/>
	);
};

export default UploadFile;
