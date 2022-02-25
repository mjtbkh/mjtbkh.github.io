import React, { useState, Fragment } from 'react';
import BlogCard from '../components/elements/BlogCard';
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';

const PostsQuery = gql`
	query Articles {
		articles {
			data {
				id
				attributes {
					title
					body
					publishedAt
					isMediumPost
					mediumLink
				}
			}
		}
	}
`;

export const PostsApolloClient = new ApolloClient({
	uri: 'https://mjtbkh-strapi-app.herokuapp.com/graphql',
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer bdb454451667e21730cc03963cd0d19f913628964c3fe7d92becc42bd680d66eebea64636db7d7a1a0a90717ea66f0c59e868aebf2f44dc88b85808c5fce004ac5e720017a368337853e705415f35d416f8e88d1840433baf5ec981864e73aed71011f397240a3daccd4e640a443b2a85f3f7916461242439e2643717023348d`,
	},
});

interface Post {
	id: number;
	attributes: {
		title: string;
		body: string;
		publishedAt: string;
		isMediumPost: boolean;
		mediumLink: string;
	};
}

const FetchHomepagePosts = () => {
	const { loading, error, data } = useQuery(PostsQuery);
	const [IPost, _] = useState<Post>({
		id: 0,
		attributes: {
			title: '',
			body: '',
			publishedAt: '',
			isMediumPost: false,
			mediumLink: 'https://medium.com/@mjtbkh/',
		},
	});

	if (loading)
		return (
			<BlogCard
				key={IPost.id}
				title={IPost.attributes.title}
				body={IPost.attributes.body}
				id={IPost.id}
				publishedAt={IPost.attributes.publishedAt}
				isMediumPost={IPost.attributes.isMediumPost}
				mediumLink={IPost.attributes.mediumLink}
			/>
		);

	if (error)
		return (
			<Fragment>
				<h4>There was an error while loading posts =(</h4>
			</Fragment>
		);

	if (data.articles.data.length === 0)
		return (
			<Fragment>
				<h4>There are currently no posts to show...</h4>
			</Fragment>
		);

	if (data)
		return data.articles.data.map((post: Post) => (
			<BlogCard
				key={post.id}
				title={post.attributes.title}
				body={post.attributes.body}
				id={post.id}
				publishedAt={post.attributes.publishedAt}
				isMediumPost={post.attributes.isMediumPost}
				mediumLink={post.attributes.mediumLink}
			/>
		));

	return <Fragment></Fragment>;
};

export default FetchHomepagePosts;
