import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className="footer-content d-flex justify-content-around align-items-center">
                <div className={styles["contact-container"]}>
                    <div>
                        <p className={`${styles["contact"]} h5`}>Contato</p>
                    </div>
                    <div>
                        <p className={`${styles["contact"]}`}>(85) 98421-0498</p>
                    </div>
                </div>

                <div className="footer-logo">
                    <Image
                        src={"/images/sublogo.png"}
                        alt={"Logo"}
                        width={150}
                        height={80}
                        className={"img-fluid"} />
                </div>

                <div className="footer-social">
                    <Link
                        className={`${styles["social-link"]}`}
                        href={"https://www.instagram.com/natielleholandanutri?igsh=ems0eXpvZ2RpZTM3"}
                        target="_blank">
                        <Image
                            src={"/images/instagram.svg"}
                            alt={"Instagram"}
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link
                        className={`${styles["social-link"]}`}
                        href={"https://wa.me/5585984210498?text="}
                        target="_blank">
                        <Image
                            src={"/images/wpp.svg"}
                            alt={"Whatsapp"}
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link
                        className={`${styles["social-link"]}`}
                        href={"mailto:natiholandanutri@gmail.com"}
                        target="_blank">
                        <Image
                            src={"/images/email.svg"}
                            alt={"Email"}
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
