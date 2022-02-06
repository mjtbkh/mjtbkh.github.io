import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import styles from './Button.module.css'

export enum ButtonColors {
	BLUE = 'bg-blue-600',
	GREEN = 'bg-green-600',
	RED = 'bg-red-600',
	GRAY = 'bg-gray-600'
}
interface ButtonProps {
	text: string
	link: string
	color: ButtonColors
}

const Button = (props: ButtonProps) => {
	return (
		<a href={props.link} className='w-fit mx-auto mr-0'>
			<button className={`${props.color} ${styles.button}`}>
				{props.text}
				<ArrowNarrowRightIcon width={16} height={16} />
			</button>
		</a>
	)
}

export default Button
