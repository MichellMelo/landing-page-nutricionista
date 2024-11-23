import Heading from './Heading';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section
            className={styles.hero}>
            <Heading text="Transforme sua vida com a Nutrição!" />
        </section >
    );
}