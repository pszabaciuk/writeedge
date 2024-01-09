import PostForm from '@/components/PostForm';

export const metadata = {
	title: 'Add new post',
	description: 'Add new post to blog',
};

export default function PageAdd() {
	return (
		<div className="p-8 min-h-32 md:min-h-[450px] bg-white flex-col justify-start items-start gap-8 flex text-gray-700 text-justify">
			<PostForm />
		</div>
	);
}
