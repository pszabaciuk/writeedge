import React from 'react';
import PostItem from '@/components/PostItem';
import { Metadata } from 'next';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { PostType } from '@/lib/definitions';

export const metadata: Metadata = {
	title: 'Blog posts',
	description: '',
};

const PostsPage = async () => {
	const allPosts = db.select().from(posts).all() as PostType[];

	return (
		<>
			{allPosts.length > 0 ? (
				allPosts.map((postItem, index, row) => {
					let divider;
					if (index < row.length - 1) {
						divider = (
							<div className="w-64 h-auto border border-stone-300 my-4 mx-auto"></div>
						);
					}

					return (
						<div key={postItem.id}>
							<PostItem post={postItem} />
							{divider}
						</div>
					);
				})
			) : (
				<div className="p-8 min-h-32 md:min-h-[450px] bg-white flex-col justify-center items-center gap-8 flex text-gray-700 text-justify">
					<p>Opsss.. there is nothing here yet...</p>
				</div>
			)}
		</>
	);
};

export default PostsPage;
