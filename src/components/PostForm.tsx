'use client';

import { addNewPost } from '@/lib/action';
import { useFormState } from 'react-dom';
import SubmitButton from './SubmitButton';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import UploadFile from './UploadFile';
import InputField from './InputField';

function PostForm() {
	const [state, formAction] = useFormState(addNewPost, undefined);
	const [image, setImage] = useState<string | null>();

	const router = useRouter();

	useEffect(() => {
		state?.success && router.push('/');
	}, [state?.success, router]);

	function handleUploadFile(image: string | null) {
		if (image) {
			setImage(image);
		}
	}

	console.log(state?.error?.field);

	return (
		<form action={formAction} className="w-full">
			<InputField title="Title">
				<input
					className={`${
						state?.error?.field === 'title' && 'border-red-500'
					} 'shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'`}
					id="title"
					type="text"
					name="title"
					placeholder="Title"
				/>
				{state?.error?.field === 'title' && (
					<p className="text-red-500 text-xs italic pt-2">
						{state?.error?.message}
					</p>
				)}
			</InputField>
			<div className="mb-4">
				<label className="block font-bold mb-2">Image url</label>
				<div className="w-full h-64 relative mb-2">
					<input
						id="image"
						type="hidden"
						name="image"
						value={image ?? undefined}
					/>
					{image ? (
						<Image
							src={image}
							fill={true}
							alt="image"
							sizes="(max-height: 256px)"
						/>
					) : (
						<Image
							src={'/placeholder-image.jpg'}
							fill={true}
							alt="image"
							style={{ objectFit: 'contain' }}
							sizes="(max-height: 256px)"
						/>
					)}
				</div>
				<UploadFile
					hasError={state?.error?.field === 'image'}
					onUpload={handleUploadFile}
				/>
				{state?.error?.field === 'image' && (
					<p className="text-red-500 text-xs italic pt-2">
						{state?.error?.message}
					</p>
				)}
			</div>
			<InputField title="Content">
				<textarea
					className={`${
						state?.error?.field === 'content' && 'border-red-500'
					} 'shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'`}
					id="content"
					name="content"
					placeholder="Content"
					rows={15}
				/>
				{state?.error?.field === 'content' && (
					<p className="text-red-500 text-xs italic pt-2">
						{state?.error?.message}
					</p>
				)}
			</InputField>
			<div className="flex items-center justify-end">
				<SubmitButton name="Add post" />
			</div>
		</form>
	);
}

export default PostForm;
