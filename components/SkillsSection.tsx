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
				<div>
					<p className={styles.about_me}>
						Mojtaba is a MERN-stack developer, experienced in developing UIs
						using React.js, Next.js, GraphQL, Tailwindcss, MUI and Redux.
						He&lsquo;s also a <b>Blockchain</b> enthusiast; interested in
						developing blockchain systems and smart-contracts on EVM, SolanaVM
						using solidity and rust. He is interested in DeFi & web3 space and
						is trying to develop platforms and tools in these spaces. He is also
						trying to attract new developers to this space and teach them how to
						understand and develop blockchain and web3 products!
					</p>
					<SkillChart />
				</div>
				<section className={styles.timeline}>
					<ol className='relative border-l border-gray-200 dark:border-gray-700'>
						<li className='mb-10 ml-6'>
							<span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
								<svg
									className='h-3 w-3 text-blue-600 dark:text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h4 className='mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
								Blockchain & smart-contracts{' '}
								<span className='mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800'>
									Latest
								</span>
							</h4>
							<time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2021
							</time>
							<p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
								Started learning about Blockchain tech and smart-contract
								development with Solidity, truffle and hardhat on EVM-compatible
								blockchains. Also working with Go & Rust to develop Blockchain
								systems and smart-contract development on non-EVM chains
							</p>
						</li>
						<li className='mb-10 ml-6'>
							<span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
								<svg
									className='h-3 w-3 text-blue-600 dark:text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h4 className='mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
								Node.js & Express.js & React
							</h4>
							<time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2020
							</time>
							<p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
								Started frontend development with JavaScript (ES6) and React.js
								since late 2020. Experienced in developing UIs using React,
								GraphQL, Redux. Also familiar with Vue.js and backend
								development with Express.js
							</p>
						</li>
						<li className='mb-10 ml-6'>
							<span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
								<svg
									className='h-3 w-3 text-blue-600 dark:text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h4 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
								PHP, Laravel and WordPress
							</h4>
							<time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2019
							</time>
							<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
								Started learning PHP languages and then backend development with
								Laravel framework and WordPress theme & plugin development
							</p>
						</li>
						<li className='mb-10 ml-6'>
							<span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
								<svg
									className='h-3 w-3 text-blue-600 dark:text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h4 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
								C++ developer
							</h4>
							<time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								since 2015
							</time>
							<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
								Started learning C++ on 2015 and have experience with C++ cli
								apps and Qt Creator IDE and C++ Qt library v5/v6: QtWidgets, QML
							</p>
						</li>
					</ol>
				</section>
			</section>
		</section>
	);
};

export default SkillsSection;
