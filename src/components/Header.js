"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header
            className="d-flex fixed-top flex-column align-items-center justify-content-center mt-0"
            style={{ backgroundColor: 'var(--color-green-dark)' }}>
            <Link
                href="/"
                className="logo mt-4"
            >
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={230}
                    height={100}
                />
            </Link>
            <nav className="nav my-4">
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeLink === "#services" ? "active" : ""}`}
                            aria-current={activeLink === "#services" ? "page" : undefined}
                            href="#services"
                            style={{ color: activeLink === "#services" ? 'var(--color-beige)' : 'var(--color-white)' }}
                            onClick={() => handleLinkClick("#services")}
                        >
                            Serviços
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeLink === "#testimonials" ? "active" : ""}`}
                            aria-current={activeLink === "#testimonials" ? "page" : undefined}
                            href="#testimonials"
                            style={{ color: activeLink === "#testimonials" ? 'var(--color-beige)' : 'var(--color-white)' }}
                            onClick={() => handleLinkClick("#testimonials")}

                        >
                            Depoimentos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeLink === "#contact" ? "active" : ""}`}
                            aria-current={activeLink === "#contact" ? "page" : undefined}
                            href="#contact"
                            style={{ color: activeLink === "#contact" ? 'var(--color-beige)' : 'var(--color-white)' }}
                            onClick={() => handleLinkClick("#contact")}
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}