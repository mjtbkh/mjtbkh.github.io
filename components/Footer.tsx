import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_widgets}>
				<div className={styles.social_media}>
					<Link href='https://facebook.com/mjtbkh' passHref>
						<a target='_blank' rel='noopener noreferrer'>
							<Image
								alt='Mojtaba Khodami on Facebook'
								src='/facebook.svg'
								width={24}
								height={24}
								id='facebook'
							/>
						</a>
					</Link>
					<Link href='https://github.com/mjtbkh' passHref>
						<a target='_blank' rel='noopener noreferrer'>
							<Image
								alt='Mojtaba Khodami on Github'
								src='/github.svg'
								width={24}
								height={24}
								id='github'
							/>
						</a>
					</Link>
					<Link href='https://instagram.com/mjtb_kh' passHref>
						<a target='_blank' rel='noopener noreferrer'>
							<Image
								alt='Mojtaba Khodami on Instagram'
								src='/instagram.svg'
								width={24}
								height={24}
								id='instagram'
							/>
						</a>
					</Link>
					<Link
						href='https://linkedin.com/in/mojtaba-khodami-0013961b5'
						passHref>
						<a target='_blank' rel='noopener noreferrer'>
							<Image
								alt='Mojtaba Khodami on LinkedIn'
								src='/linkedin.svg'
								width={24}
								height={24}
								id='linkedin'
							/>
						</a>
					</Link>
					<Link href='https://t.me/@mjtb_kh' passHref>
						<a target='_blank' rel='noopener noreferrer'>
							<Image
								alt='Mojtaba Khodami on Telegram'
								src='/telegram.svg'
								width={24}
								height={24}
								id='telegram'
							/>
						</a>
					</Link>
					<Link href='https://twitter.com/mjtbkh' passHref>
						<a target='_blank' rel='noopener noreferrer'>
							<Image
								alt='Mojtaba Khodami on Twitter'
								src='/twitter.svg'
								width={24}
								height={24}
								id='twitter'
							/>
						</a>
					</Link>
				</div>
			</div>
			<span>
				&copy; All rights reserved to{' '}
				<Link href='https://github.com/mjtbkh'>
					<a className='text-blue-500 underline'>Mojtaba Khodami</a>
				</Link>
				<br />
				{new Date().getFullYear()}
			</span>
		</footer>
	);
};

export default Footer;
