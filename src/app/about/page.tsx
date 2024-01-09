import { socials } from '@/db/jsonData';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const metadata = {
	title: 'About',
	description: 'Informations about blog author',
};

const AboutPage = () => {
	return (
		<div className="p-8 min-h-32 md:min-h-[450px] bg-white flex-col justify-start items-start gap-8 flex text-gray-700 text-justify">
			<p>
				I am a software developer skilled in diverse technologies, specializing
				in creating efficient and innovative solutions for complex problems. My
				expertise spans backend development using languages like C# and .NET,
				coupled with proficiency in frontend technologies such as React.js.
				Experienced in full-stack development, I contribute to building robust,
				scalable, and user-friendly applications. Passionate about continuous
				learning and staying abreast of industry trends to deliver cutting-edge
				solutions.
			</p>
			You can found me here:
			<ul role="list" className="list-disc pl-5 space-y-3">
				{socials.map((socialItem, index) => {
					return (
						<li key={index}>
							<Link
								href={socialItem.link}
								target="_blank"
								className="hover:opacity-20"
								key={index}
							>
								<Image
									className="py-2 pr-2 inline"
									src={socialItem.icon}
									alt={socialItem.id + ' icon'}
									width="32"
									height="32"
								/>
								{socialItem.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AboutPage;
