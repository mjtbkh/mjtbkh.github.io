import Link from 'next/link';
import styles from './BlogCard.module.css';
import Button, { ButtonColors } from './Button';
import Shimmer from './Shimmer';
import { ClockIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';

interface BlogProps {
	title: string;
	body: string;
	id: number;
	publishedAt: string;
	isMediumPost: boolean;
	mediumLink: string;
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
											props.title.toLowerCase().trim().replaceAll(' ', '-'),
									  )}`
							}>
							{props.title}
						</Link>
					</h2>
					<span className='flex w-max items-center gap-1 rounded-md bg-gray-100 py-1 px-2 text-gray-600 shadow-xl ring-1 ring-gray-50'>
						<ClockIcon width={16} height={16} />{' '}
						{new Date(props.publishedAt).toLocaleString('en-US', {
							weekday: 'short',
							year: 'numeric',
							day: 'numeric',
							month: 'short',
							formatMatcher: 'best fit',
							hour: '2-digit',
						})}
					</span>
					<p>{props.body}</p>
					<hr />
					{props.isMediumPost && (
						<Button
							text='Read on Medium'
							href={props.mediumLink}
							color={ButtonColors.BLUE}
							terget='_blank'
						/>
					)}
					{!props.isMediumPost && (
						<Link
							href={`/blog/[id]/[title]`}
							as={`/blog/${encodeURIComponent(props.id)}/${encodeURIComponent(
								props.title.toLowerCase().trim().replaceAll(' ', '-'),
							)}`}
							passHref>
							<a className={styles.insider_link}>
								Read on Blog <ArrowNarrowRightIcon width={16} height={16} />
							</a>
						</Link>
					)}
				</div>
			)}
		</>
	);
};

export default BlogCard;
