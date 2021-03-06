import React, { useState, Fragment } from 'react';
import BlogCard from '../components/elements/BlogCard';
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import { caesarCipher, FetchStrapiToken } from './FetchTokens';

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
		Authorization: `Bearer ${caesarCipher(FetchStrapiToken(), -5)}`,
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
