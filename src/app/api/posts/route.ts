import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/services/postService';

export const GET = async (request: NextRequest) => {
	try {
		const res = getAllPosts();

		return NextResponse.json(res);
	} catch (err) {
		console.log(err);
		throw new Error('Failed to acquire data');
	}
};
