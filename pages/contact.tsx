import type { NextPage } from 'next';
import styles from '../styles/Main.module.css';
import Sidebar from '../components/Sidebar';
import MainLayoutWrapper from '../components/MainLayoutWrapper';
import { PhoneIcon, MailIcon, PaperAirplaneIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';

const Contact = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [res, setRes] = useState(0);
	const [isValid, setIsValid] = useState(false);

	const genCaptcha = () => {
		setA(Math.floor(Math.random() * 10) + 1);
		setB(Math.floor(Math.random() * 10) + 1);
	};
	useEffect(() => {
		genCaptcha();
	}, []);
	return (
		<>
			<Sidebar />
			<section className={`${styles.content_wrapper} h-full`}>
				<h1 className='mx-auto my-8 flex w-max flex-row items-center justify-center gap-2 rounded-md bg-blue-700 p-4 text-center text-xl font-bold text-white'>
					<PhoneIcon width={32} height={32} />
					There are some ways if you want to get in touch...
				</h1>
				{!isValid && (
					<div className='mx-auto flex w-max flex-col gap-4 rounded-lg bg-gray-50 p-8 text-center leading-9 text-gray-600 shadow-2xl ring-2 ring-white'>
						<p>Do the math to see contact options</p>
						<form
							className='flex flex-row items-center gap-2'
							onSubmit={e => {
								e.preventDefault();
								if (res == a + b) setIsValid(true);
							}}>
							<label htmlFor='result'>
								{a} + {b} ={' '}
							</label>
							<input
								name='result'
								type='text'
								className='h-12 rounded-md p-1 shadow-inner ring-1 ring-gray-200'
								onChange={e => setRes(Number(e.target.value))}
							/>{' '}
							<button
								className='h-12 rounded-md bg-blue-500 px-2 text-white shadow-inner'
								type='submit'>
								Enter
							</button>
						</form>
					</div>
				)}
				{isValid && (
					<ul className='mx-auto w-max rounded-lg bg-gray-50 p-8 leading-9 text-gray-900 shadow-2xl ring-2 ring-white'>
						<li className='flex items-center gap-2'>
							<MailIcon width={24} height={24} color='gray' />
							Send an email to{' '}
							<i className='cursor-crosshair text-blue-900 underline decoration-dotted'>
								mojtabakh
							</i>{' '}
							on hotmail
						</li>
						<li className='flex items-center gap-2'>
							<svg
								fill='#5865F2'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 30 30'
								width='24px'
								height='24px'>
								<path d='M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z' />
							</svg>
							DM me on discord via{' '}
							<i className='cursor-crosshair text-blue-900 underline decoration-dotted'>
								mjtbkh#3582
							</i>
						</li>
						<li className='flex items-center gap-2'>
							<PaperAirplaneIcon width={24} height={24} color='lightblue' />
							Telegram me via{' '}
							<i className='cursor-crosshair text-blue-900 underline decoration-dotted'>
								@mjtb_kh
							</i>
						</li>
						<li className='py-8 text-gray-600'>
							<span>
								{'> '}If you want to talk about projects, get consultings, etc,
								I would appreciate if you use discord to get in touch
							</span>
						</li>
					</ul>
				)}
			</section>
		</>
	);
};

Contact.getLayout = function getLayout(page: NextPage) {
	return <MainLayoutWrapper>{page}</MainLayoutWrapper>;
};

export default Contact;
