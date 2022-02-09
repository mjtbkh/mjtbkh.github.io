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
					createdAt
					publishedAt
					updatedAt
					uuid
					locale
					isMediumPost
					mediumLink
				}
			}
		}
	}
`;

export const PostsApolloClient = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_BEARER_TOKEN}`,
	},
});

interface Post {
	id: number;
	attributes: {
		title: string;
		body: string;
		createdAt: string;
		publishedAt: string;
		updatedAt: string;
		uuid: string;
		locale: string;
		isMediumPost: boolean;
		mediumLink: string;
	};
}

const FetchAllPosts = () => {
	const { loading, error, data } = useQuery(PostsQuery);
	const [IPost, _] = useState<Post>({
		id: 0,
		attributes: {
			title: '',
			body: '',
			createdAt: '',
			publishedAt: '',
			updatedAt: '',
			uuid: '',
			locale: 'en',
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

export default FetchAllPosts;
