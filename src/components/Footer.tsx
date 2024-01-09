import { socials } from '@/db/jsonData';
import { handleGithubLogin, handleLogout } from '@/lib/action';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';

const Footer = async () => {
	const session = await auth();
	const isUser = session?.user;

	return (
		<div className="flex flex-col justify-center md:justify-end gap-2">
			<div className="justify-center md:justify-end items-center gap-4 flex flex-row">
				{socials.map((socialItem, index) => {
					return (
						<Link
							href={socialItem.link}
							target="_blank"
							className="hover:opacity-20"
							key={index}
						>
							<Image
								className="py-2"
								src={socialItem.icon}
								alt={socialItem.id + ' icon'}
								width="32"
								height="32"
							/>
						</Link>
					);
				})}
			</div>
			<div className="text-center md:text-right text-sm font-normal">
				2024 © Created by pszabaciuk
			</div>
			{session ? (
				<>
					{isUser && (
						<form action={handleLogout}>
							<button className="text-center md:text-right text-xs font-normal hover:opacity-20">
								_log out_
							</button>
						</form>
					)}
				</>
			) : (
				<form action={handleGithubLogin}>
					<button className="text-center md:text-right text-xs font-normal hover:opacity-20">
						_log in_
					</button>
				</form>
			)}
		</div>
	);
};

export default Footer;
