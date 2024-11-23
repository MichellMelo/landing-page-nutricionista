import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section
            className={styles.hero}>
            <h2
                className={`${styles.title} display-4 fw-bold text-center`}
            >
                Transforme sua vida com a Nutrição!
            </h2>
        </section >
    );
}