import PostItem from '@/components/PostItem';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { PostType } from '@/lib/definitions';
import { eq } from 'drizzle-orm';

const getData = (slug: string): PostType => {
	const res = db
		.select()
		.from(posts)
		.where(eq(posts.id, slug))
		.get() as PostType;

	if (!res) {
		throw new Error('There is no entry with provided id');
	}

	return res;
};

export const generateMetadata = async ({ params }: { params: any }) => {
	const { slug } = params;
	const post = await getData(slug);
	return {
		title: post.title,
		description: post.content,
	};
};

export default async function PostsPage({ params }: { params: any }) {
	const { slug } = params;

	const post = await getData(slug);

	return <PostItem post={post} fullContent={true} />;
}
