import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import { Fragment, useState } from 'react';
import GithubCard from '../components/elements/GithubCard';
import Shimmer from '../components/elements/Shimmer';
import { caesarCipher, FetchGithubToken } from './FetchTokens';

const GithubQuery = gql`
	query User($login: String!) {
		user(login: $login) {
			login
			name
			url
			avatarUrl
			bio
			status {
				message
			}
			repositoriesContributedTo(
				last: 4
				privacy: PUBLIC
				isLocked: false
				includeUserRepositories: false
			) {
				edges {
					node {
						id
						name
						url
						description
					}
				}
			}
			repositories(last: 4, privacy: PUBLIC) {
				edges {
					node {
						id
						name
						url
						description
					}
				}
			}
			organizations(last: 4) {
				edges {
					node {
						id
						name
						url
						avatarUrl
					}
				}
			}
		}
	}
`;

export const GithubApolloClient = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${caesarCipher(FetchGithubToken(), -3)}`,
	},
});

interface FetchGithubInfoProps {
	login: string;
}

const FetchGithubInfo = ({ login }: FetchGithubInfoProps) => {
	const { loading, error, data } = useQuery(GithubQuery, {
		variables: { login },
	});

	if (error)
		return (
			<Fragment>
				<h4>There was an error while loading data from Github.com =(</h4>
			</Fragment>
		);

	if (loading) return <Shimmer />;

	if (data && data.user.login)
		return <GithubCard key={data.user.login} user={data.user} />;

	return <Fragment></Fragment>;
};

export default FetchGithubInfo;
