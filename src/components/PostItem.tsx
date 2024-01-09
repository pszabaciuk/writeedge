import { PostType } from '@/lib/definitions';
import Link from 'next/link';
import Image from 'next/image';

type PostItemProps = {
	post: PostType;
	fullContent?: boolean;
};

export const PostItem = ({ post, fullContent }: PostItemProps) => {
	return (
		<article className="p-8 bg-white flex-col justify-start items-start gap-8 flex text-gray-700 text-center">
			<div className="text-4xl">{post.title}</div>
			<div className="self-stretch h-8 justify-center items-center gap-2 inline-flex">
				<div className="w-32 px-2 py-1 rounded border border-neutral-100 justify-center items-center gap-1 flex">
					<Image
						className="w-4 h-4"
						src="/clock.png"
						alt="Clock icon"
						width={16}
						height={16}
					/>
					<div className="w-20 text-sm">{post.date}</div>
				</div>
			</div>
			<div className="w-full h-64 relative">
				<Image
					src={post.image}
					fill={true}
					alt="image"
					sizes="(max-height: 256px)"
				/>
			</div>
			<div
				className={`self-stretch text-normal text-justify ${
					fullContent ? '' : 'max-h-60 text-ellipsis overflow-hidden'
				}`}
			>
				{post.content}
			</div>
			{!fullContent && (
				<div className="self-stretch h-8 flex-col justify-start items-start flex">
					<div className="self-stretch text-center text-sm drop-shadow-md text-gray-500">
						<Link href={`/posts/${post.id}`} className="hover:opacity-20">
							Read more ...
						</Link>
					</div>
				</div>
			)}
		</article>
	);
};

export default PostItem;
