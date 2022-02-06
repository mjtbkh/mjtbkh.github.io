import {
	HomeIcon,
	PencilIcon,
	ViewGridIcon,
	IdentificationIcon,
	PhoneIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from './Footer'
import styles from './Sidebar.module.css'

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
					<HomeIcon className={`${styles.sidebar_icons} text-blue-500`} /> Home
				</li>
				<li>
					<PencilIcon className={`${styles.sidebar_icons} text-indigo-500`} />{' '}
					Blog
				</li>
				<li>
					<ViewGridIcon className={`${styles.sidebar_icons} text-violet-500`} />
					Portfolio
				</li>
				<li>
					<IdentificationIcon
						className={`${styles.sidebar_icons} text-purple-500`}
					/>
					About
				</li>
				<li>
					<PhoneIcon className={`${styles.sidebar_icons} text-fuchsia-500`} />
					Contact
				</li>
			</ul>

			<Footer />
		</aside>
	)
}

export default Sidebar
