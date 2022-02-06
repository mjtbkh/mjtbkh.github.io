import MainLayoutWrapper from '../components/MainLayoutWrapper'
import styles from '../styles/Main.module.css'
import Sidebar from '../components/Sidebar'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import BlogSection from '../components/BlogSection'
import { NextPage } from 'next'

const HomePage = () => {
	return (
		<>
			<Sidebar />
			<section className={styles.content_wrapper}>
				<SkillsSection />
				<ProjectsSection />
				<BlogSection />
			</section>
		</>
	)
}

HomePage.getLayout = function getLayout(page: NextPage) {
	return <MainLayoutWrapper>{page}</MainLayoutWrapper>
}

export default HomePage
