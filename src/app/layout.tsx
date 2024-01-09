import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Menu from '@/components/Menu';
import './globals.css';
import { auth } from '@/lib/auth';
import { DefaultTemplateString } from 'next/dist/lib/metadata/types/metadata-types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'WriteEdge',
		template: '%s | WriteEdge',
	},
	description: '',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	const titleElement = metadata.title as DefaultTemplateString;
	const title = titleElement.default.toString() ?? '';

	return (
		<html lang="en">
			<body className={inter.className + ' font-normal'}>
				<div className="px-4 md:px-64 py-4 bg-neutral-100">
					<main className="grid grid-cols-1 md:grid-cols-12">
						<div className="md:hidden">
							<Menu
								title={title}
								description={metadata.description?.toString() ?? ''}
								session={session!}
							/>
						</div>
						<Navigation />
						<div className="md:col-span-9 md:pl-8 justify-start items-center gap-2.5">
							{children}
						</div>
						<div className="mt-4 md:mt-0 md:hidden">
							<Footer />
						</div>
					</main>
				</div>
			</body>
		</html>
	);
}
