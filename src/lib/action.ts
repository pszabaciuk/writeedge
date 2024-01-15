'use server';

import { FormResult } from '@/lib/definitions';
import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';
import { signIn, signOut } from './auth';
import { validateAddNewPostData } from './validations';
import { addPost } from '@/services/postService';
import { InsertPost } from '@/db/schema';

export const handleGithubLogin = async () => {
	await signIn('github');
};

export const handleLogout = async () => {
	await signOut();
};

export const addNewPost = async (
	previousState: any,
	formData: FormData
): Promise<FormResult | null | undefined> => {
	try {
		const errors = validateAddNewPostData(formData);

		if (errors != null) {
			return errors;
		}

		const rawFormData: InsertPost = {
			id: uuidv4(),
			title: formData.get('title')?.toString() ?? '',
			date: new Date().toISOString().substring(0, 10),
			image: formData.get('image')?.toString() ?? '',
			content: formData.get('content')?.toString() ?? '',
		};

		addPost(rawFormData);

		revalidatePath('/posts');

		return { success: true };
	} catch (e) {
		console.log(e);
		throw new Error('There was an error while adding new post');
	}
};
