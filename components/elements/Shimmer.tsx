import styles from './Shimmer.module.css';

const Shimmer = () => {
	return (
		<div className={styles.shimmer_container}>
			<div className={styles.shimmer}></div>
			<div className={styles.title}></div>
			<div className={styles.body}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={styles.button}></div>
		</div>
	);
};

export default Shimmer;
