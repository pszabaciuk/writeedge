'use server';

import { FormResult } from '@/lib/definitions';
import { isNullOrEmpty } from './utils';

export async function validateAddNewPostData(
	formData: FormData
): Promise<FormResult | null> {
	if (isNullOrEmpty(formData.get('title'))) {
		return {
			success: false,
			error: { field: 'title', message: 'Title field is required' },
		};
	}

	if (isNullOrEmpty(formData.get('image'))) {
		return {
			success: false,
			error: { field: 'image', message: 'Image is required' },
		};
	}

	if (isNullOrEmpty(formData.get('content'))) {
		return {
			success: false,
			error: { field: 'content', message: 'Content field is required' },
		};
	}

	return null;
}
