import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_widgets}>
				<div className={styles.social_media}>
					<a href='https://facebook.com/'>
						<Image
							alt='Mojtaba Khodami on Facebook'
							src='/facebook.svg'
							width={24}
							height={24}
							id='facebook'
						/>
					</a>
					<a href='htttps://github.com/mjtbkh'>
						<Image
							alt='Mojtaba Khodami on Github'
							src='/github.svg'
							width={24}
							height={24}
							id='github'
						/>
					</a>
					<a href='htttps://instagram.com/mjtb_kh'>
						<Image
							alt='Mojtaba Khodami on Instagram'
							src='/instagram.svg'
							width={24}
							height={24}
							id='instagram'
						/>
					</a>
					<a href='htttps://.com/'>
						<Image
							alt='Mojtaba Khodami on LinkedIn'
							src='/linkedin.svg'
							width={24}
							height={24}
							id='linkedin'
						/>
					</a>
					<a href='htttps://t.me/@mjtb_kh'>
						<Image
							alt='Mojtaba Khodami on Telegram'
							src='/telegram.svg'
							width={24}
							height={24}
							id='telegram'
						/>
					</a>
					<a href='htttps://twitter.com/mjtbkh'>
						<Image
							alt='Mojtaba Khodami on Twitter'
							src='/twitter.svg'
							width={24}
							height={24}
							id='twitter'
						/>
					</a>
				</div>
			</div>
			<span>
				&copy; All rights reserved to{' '}
				<a href='https://github.com/mjtbkh' className='underline text-blue-500'>
					Mojtaba Khodami
				</a>
				<br />
				{new Date().getFullYear()}
			</span>
		</footer>
	)
}

export default Footer
