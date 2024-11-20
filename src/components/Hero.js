import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section
            className={styles.hero}>
            <h2
                id="hero-title"
                className={`${styles.heroTitle} animate__animated animate__zoomIn display-4 text-center fw-bold`}>
                Transforme sua saúde com a Nutrição!
            </h2>
        </section >
    );
}