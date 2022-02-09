import styles from './ProjectsSection.module.css';
import { BeakerIcon } from '@heroicons/react/outline';
import FetchGithubInfo, { GithubApolloClient } from '../hooks/FetchGithubInfo';
import { ApolloProvider } from '@apollo/client';

const ProjectsSection = () => {
	return (
		<section className={styles.projects_section}>
			<h3>
				My projects & portfolio <BeakerIcon width={48} height={48} />
			</h3>
			<ApolloProvider client={GithubApolloClient}>
				<FetchGithubInfo login={'mjtbkh'} />
			</ApolloProvider>
		</section>
	);
};

export default ProjectsSection;
