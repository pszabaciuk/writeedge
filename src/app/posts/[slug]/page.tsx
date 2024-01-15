import PostItem from '@/components/PostItem';
import { PostType } from '@/lib/definitions';
import { getPostById } from '@/services/postService';

const getData = (slug: string): PostType => {
	const res = getPostById(slug);

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
