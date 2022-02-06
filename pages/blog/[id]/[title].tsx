import Sidebar from '../../../components/Sidebar'
import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import FetchPost, { PostApolloClient } from '../../../hooks/FetchPost'
import styles from '../../../styles/Main.module.css'
import { NextPage } from 'next'
import MainLayoutWrapper from '../../../components/MainLayoutWrapper'

interface RouterParams {
	params: [id: number, title: string]
}

const SinglePost = () => {
	const router = useRouter()
	const { id, title }: any = router.query

	return (
		<>
			<Sidebar />
			<section className={styles.content_wrapper}>
				<ApolloProvider client={PostApolloClient}>
					<FetchPost id={id} />
				</ApolloProvider>
			</section>
		</>
	)
}

SinglePost.getLayout = function getLayout(page: NextPage) {
	return <MainLayoutWrapper>{page}</MainLayoutWrapper>
}

export default SinglePost
