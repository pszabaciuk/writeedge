import { NextRequest, NextResponse } from 'next/server';
import { getPostById } from '@/services/postService';

export const GET = async (request: NextRequest, { params }: any) => {
	try {
		const { id } = params;

		const res = getPostById(id);

		return NextResponse.json(res);
	} catch (err) {
		console.log(err);
		throw new Error('Failed to acquire data');
	}
};
