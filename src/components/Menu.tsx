'use client';

import { menu } from '@/db/jsonData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inconsolata } from 'next/font/google';
import { Session } from 'next-auth/types';

const inconsolata = Inconsolata({ subsets: ['latin'] });

type MenuProps = {
	title: string;
	description: string;
	session: Session;
};

const Menu = ({ title, description, session }: MenuProps) => {
	const pathname = usePathname();

	const menuItems = menu.filter((menuItem) => {
		if (menuItem.auth && !session?.user) {
			return false;
		}

		return true;
	});

	return (
		<div className="text-center md:text-right">
			<div className={'text-5xl font-semibold ' + inconsolata.className}>
				{title}
			</div>
			<div className={'text-xl font-normal ' + inconsolata.className}>
				{description}
			</div>
			<div className="h-0 md:h-8" />
			<ul className="inline-flex gap-4 md:block md:gap-0 text-2xl font-normal leading-9">
				{menuItems.map((menuItem, index) => {
					return (
						<li key={index} className="py-2">
							<Link
								href={menuItem.link}
								className={`${
									pathname !== menuItem.link && 'text-gray-400'
								} hover:opacity-20`}
							>
								{menuItem.id}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Menu;
