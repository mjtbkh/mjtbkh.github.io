import styles from './BlogList.module.css';
import FetchAllPosts, { PostsApolloClient } from '../hooks/FetchAllPosts';
import { ApolloProvider } from '@apollo/client';

import { NewspaperIcon } from '@heroicons/react/outline';

const BlogsList = () => {
	return (
		<section className={styles.container}>
			<h3>
				Blogs <NewspaperIcon width={48} height={48} />
			</h3>
			<ApolloProvider client={PostsApolloClient}>
				<div className={styles.blogs_wrapper}>
					<FetchAllPosts />
				</div>
			</ApolloProvider>
		</section>
	);
};

export default BlogsList;
