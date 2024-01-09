import { metadata } from '@/app/layout';
import Footer from './Footer';
import Menu from './Menu';
import { auth } from '@/lib/auth';
import { DefaultTemplateString } from 'next/dist/lib/metadata/types/metadata-types';

const Navigation = async () => {
	const session = await auth();

	const titleElement = metadata.title as DefaultTemplateString;
	const title = titleElement.default.toString() ?? '';

	return (
		<div className="hidden col-span-3 items-end text-right text-gray-600 sm:grid grid-cols-1 content-center">
			<div className="fixed top-0 bottom-0">
				<div className="table h-full">
					<div className="table-cell align-middle">
						<Menu
							title={title}
							description={metadata.description?.toString() ?? ''}
							session={session!}
						/>
						<div className="h-8" />
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
