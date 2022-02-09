import Link from 'next/link';
import {
	HomeIcon,
	PencilIcon,
	ViewGridIcon,
	IdentificationIcon,
	PhoneIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Footer from './Footer';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.info}>
				<Image
					className={styles.image}
					src='/mojtaba.jpg'
					alt="Mojtaba Khodami's blog"
					width={128}
					height={128}
				/>
				<h3 className={styles.title}>Mojtaba Khodami</h3>
				<span className={styles.description}>
					Full-stack developer / smart-contract engineer / Blockchain developer
				</span>
			</div>
			<ul className={styles.menu}>
				<li>
					<Link href={`/`} passHref>
						<a>
							<HomeIcon className={`${styles.sidebar_icons} text-blue-500`} />{' '}
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link href={`/blog/`} passHref>
						<a>
							<PencilIcon
								className={`${styles.sidebar_icons} text-indigo-500`}
							/>{' '}
							Blog
						</a>
					</Link>
				</li>
				<li>
					<Link href={`/`} passHref>
						<a>
							<ViewGridIcon
								className={`${styles.sidebar_icons} text-violet-500`}
							/>
							Portfolio
						</a>
					</Link>
				</li>
				<li>
					<Link href={`/`} passHref>
						<a>
							<PhoneIcon
								className={`${styles.sidebar_icons} text-fuchsia-500`}
							/>
							Contact
						</a>
					</Link>
				</li>
			</ul>

			<Footer />
		</aside>
	);
};

export default Sidebar;
