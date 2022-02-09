import styles from './BlogSection.module.css';
import { NewspaperIcon } from '@heroicons/react/outline';
import FetchHomepagePosts, {
	PostsApolloClient,
} from '../hooks/FetchHomepagePosts';
import { ApolloProvider } from '@apollo/client';

const BlogSection = () => {
	return (
		<section className={styles.blog_section}>
			<h3>
				Recent blogs <NewspaperIcon width={48} height={48} />
			</h3>
			<section className={styles.posts_container}>
				<ApolloProvider client={PostsApolloClient}>
					<FetchHomepagePosts />
				</ApolloProvider>
			</section>
		</section>
	);
};

export default BlogSection;
