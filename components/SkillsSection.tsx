import styles from './SkillsSection.module.css';
import SkillChart from './SkillChart';
import { FingerPrintIcon } from '@heroicons/react/outline';

const SkillsSection = () => {
	return (
		<section className={styles.skills_section}>
			<h3>
				About me & my skills <FingerPrintIcon width={48} height={48} />
			</h3>
			<section className={styles.skills_container}>
				<p className={styles.about_me}>
					Mojtaba is a MERN-stack developer, experienced in developing UIs using
					React.js, Next.js, GraphQL, Tailwindcss, MUI and Redux. He&lsquo;s
					also a <b>Blockchain</b> enthusiast; interested in developing
					blockchain systems and smart-contracts on EVM, SolanaVM using solidity
					and rust. He is interested in DeFi & web3 space and is trying to
					develop platforms and tools in these spaces. He is also trying to
					attract new developers to this space and teach them how to understand
					and develop blockchain and web3 products!
				</p>
				<SkillChart />
			</section>
		</section>
	);
};

export default SkillsSection;
