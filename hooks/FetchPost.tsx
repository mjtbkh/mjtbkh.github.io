import styles from '../styles/Post.module.css'
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client'
import {
	ArrowNarrowLeftIcon,
	ClockIcon,
	PuzzleIcon
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const PostQuery = gql`
	query Article($id: ID!) {
		article(id: $id) {
			data {
				id
				attributes {
					title
					body
					publishedAt
					updatedAt
					locale
					isMediumPost
					mediumLink
				}
			}
		}
	}
`

export const PostApolloClient = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_BEARER_TOKEN}`
	}
})

interface PostDataProps {
	id: number
}

interface PostsDataAttributes {
	title: string
	body: string
	publishedAt: string
	updatedAt: string
	locale: string
	isMediumPost: boolean
	mediumLink: string
}

const FetchPost = ({ id }: PostDataProps) => {
	const router = useRouter()
	const { loading, error, data } = useQuery(PostQuery, {
		variables: { id }
	})

	if (error) return <h4>Error: {error.message}</h4>
	if (data) {
		const attr: PostsDataAttributes = data.article.data.attributes

		return (
			<article className={styles.the_article}>
				<button
					className={styles.back_btn}
					onClick={() => router.push('/blog')}>
					<ArrowNarrowLeftIcon width={16} height={16} />
					Back to blogs
				</button>
				<section className={styles.meta}>
					<h1>{attr.title}</h1>
					<div className={styles.info}>
						<span>
							<ClockIcon width={16} widths={16} />
							Published:{' '}
							{new Date(attr.publishedAt).toLocaleString('en-US', {
								weekday: 'short',
								year: 'numeric',
								day: 'numeric',
								month: 'short',
								formatMatcher: 'best fit',
								hour: '2-digit'
							})}
						</span>
						{attr.updatedAt && (
							<span>
								<PuzzleIcon width={16} height={16} />
								Updated:{' '}
								{new Date(attr.updatedAt).toLocaleString('en-US', {
									weekday: 'short',
									year: 'numeric',
									day: 'numeric',
									month: 'short',
									formatMatcher: 'best fit',
									hour: '2-digit'
								})}
							</span>
						)}
					</div>
				</section>
				<hr />
				<section className={styles.body}>
					<p>{attr.body}</p>
				</section>
			</article>
		)
	}

	return <p>Hello</p>
}

export default FetchPost
