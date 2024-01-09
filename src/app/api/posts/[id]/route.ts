import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const GET = async (request: NextRequest, { params }: any) => {
	try {
		const { id } = params;

		const res = db.select().from(posts).where(eq(posts.id, id!)).get();

		return NextResponse.json(res);
	} catch (err) {
		console.log(err);
		throw new Error('Failed to acquire data');
	}
};
