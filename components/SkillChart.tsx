import {
	Radar,
	RadarChart,
	PolarGrid,
	Legend,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from 'recharts';
import styles from './SkillChart.module.css';

const skills = [
	{
		subject: 'React.js',
		A: 80,
		B: 0,
		fullMark: 100,
	},
	{
		subject: 'Node/Express',
		A: 55,
		B: 0,
		fullMark: 100,
	},
	{
		subject: 'Golang',
		A: 40,
		B: 0,
		fullMark: 100,
	},
	{
		subject: 'Rust',
		A: 30,
		B: 0,
		fullMark: 100,
	},
	{
		subject: 'Solidity',
		A: 75,
		B: 0,
		fullMark: 100,
	},
	{
		subject: 'Truffle/hardhat',
		A: 90,
		B: 0,
		fullMark: 100,
	},
	{
		subject: 'Blockchain',
		A: 65,
		B: 0,
		fullMark: 100,
	},
	{
		subject: 'EVM',
		A: 55,
		B: 0,
		fullMark: 100,
	},
	{
		subject: 'Git/Github',
		A: 75,
		B: 0,
		fullMark: 100,
	},
];

const SkillChart = () => {
	return (
		<div className={styles.container}>
			<ResponsiveContainer width={'100%'} height={300}>
				<RadarChart data={skills} cx='50%' cy='50%' outerRadius='80%'>
					<PolarGrid />
					<PolarAngleAxis dataKey='subject'></PolarAngleAxis>
					<PolarRadiusAxis angle={30} domain={[0, 100]}></PolarRadiusAxis>
					<Radar
						dataKey='A'
						name='Mojtaba'
						stroke='#8884d8'
						fill='#8884d8'
						fillOpacity={0.6}></Radar>
					<Legend />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SkillChart;
