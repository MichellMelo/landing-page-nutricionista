import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ h3, topics, img, alt }) {
    return (
        <div
            className="card shadow-sm border-0 text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <div className={styles["card-img-top"]}>
                <Image
                    src={img}
                    alt={alt}
                    width={350}
                    height={180}
                    className="img-fluid"
                />
            </div>
            <div className={styles["image-assignment"]}>
                <p
                    className="text-muted">
                    Designed by <a
                        className={styles.freepik}
                        href="www.freepik.com"
                        target="_blank">
                        Freepik
                    </a>
                </p>
            </div>
            <div className="card-body">
                <h3 className="h5 fw-bold">{h3}</h3>
                {/* Renderização dinâmica dos tópicos */}
                {topics && (
                    <ul className="list-unstyled">
                        {topics.map((topic, index) => (
                            <li
                                key={index}
                                className={`${styles.subtitle} text-muted`}
                            >
                                {topic}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}