import type { NextPage } from 'next';
import styles from '../styles/Main.module.css';
import Sidebar from '../components/Sidebar';
import BlogsList from '../components/BlogsList';
import MainLayoutWrapper from '../components/MainLayoutWrapper';

const Blog = () => {
	return (
		<>
			<Sidebar />
			<section className={styles.content_wrapper}>
				<BlogsList />
			</section>
		</>
	);
};

Blog.getLayout = function getLayout(page: NextPage) {
	return <MainLayoutWrapper>{page}</MainLayoutWrapper>;
};

export default Blog;
