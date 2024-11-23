import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ h3, p, img, alt }) {
    return (
        <div
            className="card shadow-sm border-0 text-center"
            data-aos="fade-up"
            data-aos-duration="3000"
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
            <div className="card-body">
                <h3 className="h5 fw-bold">{h3}</h3>
                <p className="text-muted">{p}</p>
            </div>
        </div>
    );
}