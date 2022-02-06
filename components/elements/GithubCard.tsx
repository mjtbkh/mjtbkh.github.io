import Image from 'next/image'
import styles from './GithubCard.module.css'
import {
	CollectionIcon,
	ExternalLinkIcon,
	FireIcon
} from '@heroicons/react/outline'

interface GithubCardProps {
	user: {
		login: string
		name: string
		url: string
		avatarUrl: string
		status: {
			message: string
		}
		bio: string
		repositoriesContributedTo: {
			edges: [
				node: {
					id: string
					name: string
					url: string
					description: string
				}
			]
		}
		repositories: {
			edges: [
				node: {
					id: string
					name: string
					url: string
					description: string
				}
			]
		}
		organizations: {
			edges: [
				node: {
					id: string
					name: string
					url: string
					avatarUrl: string
				}
			]
		}
	}
}

const shimmer = (w: number, h: number): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="40%" />
      <stop stop-color="#333" offset="50%" />
    </linearGradient>
  </defs>
  <rect style="border-radius: 50%" width="${w}" height="${h}" fill="#777" />
  <rect style="border-radius: 50%; overflow: hidden;" id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (el: string) =>
	typeof window === 'undefined'
		? Buffer.from(el).toString('base64')
		: window.btoa(el)

const GithubCard = (props: GithubCardProps) => {
	return (
		<section className={styles.github_card}>
			<section className={styles.info}>
				<section className={styles.individual}>
					<Image
						src={props.user.avatarUrl}
						width={128}
						height={128}
						alt={props.user.login}
						title={props.user.name}
						placeholder='blur'
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(80, 80)
						)}`}
					/>
					<div>
						<a href={props.user.url} target='_blank' rel='nofollow noreferrer'>
							{props.user.name} (@{props.user.login}){' '}
							<ExternalLinkIcon width={16} height={16} />
						</a>
						<p className={styles.mood}>
							<FireIcon width={16} height={16} />
							mood: {props.user.status.message}
						</p>
						<p>{props.user.bio}</p>
					</div>
				</section>
				<section className={styles.organizations}>
					<p>My Github organizations</p>
					<div>
						{props.user.organizations.edges.map((org) => (
							<a
								href={org.node?.url}
								key={org.node?.id}
								target='_blank'
								rel='nofollow noreferrer'>
								<Image
									src={org.node?.avatarUrl}
									width={36}
									height={36}
									title={org.node?.name}
									alt={org.node?.name}
									placeholder='blur'
									blurDataURL={`data:image/svg+xml;base64,${toBase64(
										shimmer(30, 30)
									)}`}
								/>
							</a>
						))}
					</div>
				</section>
			</section>
			<section className={styles.repos}>
				<p>My Github contributions</p>
				<div className={styles.contributions}>
					{props.user.repositoriesContributedTo.edges.map((repo) => (
						<div key={repo.node?.id}>
							<a
								href={repo.node?.url}
								target='_blank'
								rel='nofollow noreferrer'>
								<CollectionIcon width={16} height={16} />
								{repo.node?.name}
							</a>
							<i className='text-xs text-gray-600'>
								{repo.node?.description ?? 'No description'}
							</i>
						</div>
					))}
				</div>
			</section>
			<section className={styles.repos}>
				<p>My Github repositories</p>
				<div className={styles.contributions}>
					{props.user.repositories.edges.map((repo) => (
						<div key={repo.node?.id}>
							<a
								href={repo.node?.url}
								target='_blank'
								rel='nofollow noreferrer'>
								<CollectionIcon width={16} height={16} />
								{repo.node?.name}
							</a>
							<i className='text-xs text-gray-600'>
								{repo.node?.description ?? 'No description'}
							</i>
						</div>
					))}
				</div>
			</section>
		</section>
	)
}

export default GithubCard
