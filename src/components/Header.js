import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="d-flex fixed-top flex-column align-items-center justify-content-center mt-0" style={{ backgroundColor: 'var(--color-green-dark)' }}>
            <Link href="/" className="logo mt-4"><Image src="/images/logo.png" alt="Logo" width={230} height={100} /></Link>
            <nav className="nav my-4">
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#services" style={{ color: 'var(--color-beige)' }}>Serviços</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testimonials" style={{ color: 'var(--color-white)' }}>Depoimentos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact" style={{ color: 'var(--color-white)' }}>Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}