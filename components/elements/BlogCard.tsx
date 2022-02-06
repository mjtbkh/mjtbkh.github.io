import Link from 'next/link'
import styles from './BlogCard.module.css'
import Button, { ButtonColors } from './Button'
import Shimmer from './Shimmer'
import { ClockIcon } from '@heroicons/react/outline'

interface BlogProps {
	title: string
	body: string
	id: number
	publishedAt: string
	isMediumPost: boolean
	mediumLink: string
}

const BlogCard = (props: BlogProps) => {
	return (
		<>
			{!props.title && (
				<>
					<div className={styles.single_post}>
						<Shimmer />
					</div>
					<div className={styles.single_post}>
						<Shimmer />
					</div>
					<div className={styles.single_post}>
						<Shimmer />
					</div>
				</>
			)}

			{props.title && (
				<div className={styles.single_post}>
					<h2>
						<Link
							href={
								props.isMediumPost ? props.mediumLink : `/blog/[id]/[title]`
							}
							as={
								props.isMediumPost
									? props.mediumLink
									: `/blog/${encodeURIComponent(props.id)}/${encodeURIComponent(
											props.title.toLowerCase().trim().replaceAll(' ', '-')
									  )}`
							}>
							{props.title}
						</Link>
					</h2>
					<span className='flex w-max shadow-xl items-center gap-1 text-gray-600 bg-gray-100 ring-1 ring-gray-50 py-1 px-2 rounded-md'>
						<ClockIcon width={16} height={16} />{' '}
						{new Date(props.publishedAt).toLocaleString('en-US', {
							weekday: 'short',
							year: 'numeric',
							day: 'numeric',
							month: 'short',
							formatMatcher: 'best fit',
							hour: '2-digit'
						})}
					</span>
					<p>{props.body}</p>
					<hr />
					{props.isMediumPost && (
						<Button
							text='Read on Medium'
							link={props.mediumLink}
							color={ButtonColors.BLUE}
						/>
					)}
					{!props.isMediumPost && (
						<Button text='Read on Blog' link={''} color={ButtonColors.GREEN} />
					)}
				</div>
			)}
		</>
	)
}

export default BlogCard
