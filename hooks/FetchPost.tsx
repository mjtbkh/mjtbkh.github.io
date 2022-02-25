import Image from 'next/image';
import styles from '../styles/Post.module.css';
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import {
	ArrowNarrowLeftIcon,
	ClockIcon,
	PuzzleIcon,
	RefreshIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import SharingButton from '../components/elements/SharingButton';
import Comments from '../components/Comments';

const PostQuery = gql`
	query Article($id: ID!) {
		article(id: $id) {
			data {
				id
				attributes {
					title
					body
					post_media {
						data {
							attributes {
								name
								url
							}
						}
					}
					publishedAt
					updatedAt
					locale
					isMediumPost
					mediumLink
				}
			}
		}
	}
`;

export const PostApolloClient = new ApolloClient({
	uri: 'https://mjtbkh-strapi-app.herokuapp.com/graphql',
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer bdb454451667e21730cc03963cd0d19f913628964c3fe7d92becc42bd680d66eebea64636db7d7a1a0a90717ea66f0c59e868aebf2f44dc88b85808c5fce004ac5e720017a368337853e705415f35d416f8e88d1840433baf5ec981864e73aed71011f397240a3daccd4e640a443b2a85f3f7916461242439e2643717023348d`,
	},
});

interface PostDataProps {
	id: number;
}

interface PostsDataAttributes {
	title: string;
	body: string;
	post_media: {
		data: [
			{
				attributes: {
					name: string;
					url: string;
				};
			},
		];
	};
	publishedAt: string;
	updatedAt: string;
	locale: string;
	isMediumPost: boolean;
	mediumLink: string;
}

const FetchPost = ({ id }: PostDataProps) => {
	const router = useRouter();
	const { loading, error, data } = useQuery(PostQuery, {
		variables: { id },
	});

	if (loading)
		return (
			<article className={styles.the_article}>
				<div className={styles.spinner}>
					<RefreshIcon width={48} height={48} />
				</div>
			</article>
		);
	if (error) return <h4>Error: {error.message}</h4>;
	if (data) {
		const attr: PostsDataAttributes = data.article.data.attributes;

		return (
			<article className={styles.the_article}>
				<button
					className={styles.back_btn}
					onClick={() => router.push('/blog')}>
					<ArrowNarrowLeftIcon width={16} height={16} />
					Back to blogs
				</button>
				<section className={styles.meta}>
					<div className={styles.thumbnail}>
						<Image
							src={`http://localhost:1337${attr.post_media.data[0].attributes.url}`}
							alt={attr.post_media.data[0].attributes.name}
							layout='intrinsic'
							width={280}
							height={280}
						/>
					</div>
					<div className={styles.info}>
						<h1>{attr.title}</h1>
						<div className={styles.dates}>
							<span>
								<ClockIcon width={16} widths={16} />
								Published:{' '}
								{new Date(attr.publishedAt).toLocaleString('en-US', {
									weekday: 'short',
									year: 'numeric',
									day: 'numeric',
									month: 'short',
									formatMatcher: 'best fit',
									hour: '2-digit',
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
										hour: '2-digit',
									})}
								</span>
							)}
						</div>
						<div className={styles.social}>
							<SharingButton
								name='twitter'
								url={`https://twitter.com/intent/tweet/?text=${attr.title}&url=http://mjtbkh.github.io/${router.asPath}`}
							/>
							<SharingButton
								name='facebook'
								url={`https://facebook.com/sharer/sharer.php?u=http://mjtbkh.github.io/${router.asPath}`}
							/>
							<SharingButton
								name='reddit'
								url={`https://reddit.com/submit/?url=http://mjtbkh.github.io/${router.asPath}`}
							/>
							<SharingButton
								name='whatsapp'
								url={`whatsapp://send?text=${attr.title} http://mjtbkh.github.io/${router.asPath}`}
							/>
							<SharingButton
								name='hackernews'
								url={`https://news.ycombinator.com/submitlink?u=http://mjtbkh.github.io/${router.asPath}&t=${attr.title}`}
							/>
							<SharingButton
								name='telegram'
								url={`https://telegram.me/share/url?text=${attr.title}&url=http://mjtbkh.github.io/${router.asPath}`}
							/>
							<SharingButton
								name='mail'
								url={`mailto:?subject=${attr.title}&body=${attr.title} http://mjtbkh.github.io/${router.asPath}`}
							/>
						</div>
					</div>
				</section>
				<hr />
				<section className={styles.body}>
					<p>{attr.body}</p>
				</section>
				<hr />
				<section className={styles.comments}>
					<h3>Comments on &ldquo;{attr.title}&rdquo;</h3>
					<Comments
						id={id.toString()}
						title={attr.title}
						url={`http://mjtbkh.github.io/${router.asPath}`}
					/>
				</section>
			</article>
		);
	}

	return <p>Hello</p>;
};

export default FetchPost;
