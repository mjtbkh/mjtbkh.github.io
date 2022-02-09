import styles from './MainLayoutWrapper.module.css';
import Head from 'next/head';

const MainLayoutWrapper = ({ children }: any) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>
					Mojtaba Khodami | Full-stack web developer | smart-contract engineer |
					Blockchain developer
				</title>
				<meta name='description' content="Mojtaba Khodami's personal website" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>{children}</main>
		</div>
	);
};

export default MainLayoutWrapper;
