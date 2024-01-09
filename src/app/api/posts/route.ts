import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { posts } from '@/db/schema';

export const GET = async (request: NextRequest) => {
	try {
		const res = db.select().from(posts).all();

		return NextResponse.json(res);
	} catch (err) {
		console.log(err);
		throw new Error('Failed to acquire data');
	}
};
