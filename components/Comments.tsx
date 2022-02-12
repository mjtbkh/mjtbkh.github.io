import { DiscussionEmbed } from 'disqus-react';

interface CommentProps {
	id: string;
	title: string;
	url: string;
}

const Comments = ({ id, title, url }: CommentProps) => {
	const disqusShortName = 'mjtbkh';
	const disqusConfig = {
		url: url,
		identifier: id, // Single post id
		title: title, // Single post title
	};

	return <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />;
};

export default Comments;
