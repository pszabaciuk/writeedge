import { db } from '@/db';
import { InsertPost, posts } from '@/db/schema';
import { PostType } from '@/lib/definitions';
import { eq } from 'drizzle-orm';

export function getAllPosts(): PostType[] {
	return db.select().from(posts).all() as PostType[];
}

export function getPostById(id: string): PostType {
	return db.select().from(posts).where(eq(posts.id, id)).get() as PostType;
}

export function addPost(post: InsertPost): void {
	db.insert(posts).values(post);
}
