"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = null;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (
                    window.scrollY >= sectionTop - 50 && // Ajuste para considerar margens
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveLink(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="d-flex fixed-top flex-column align-items-center justify-content-center mt-0"
            style={{ backgroundColor: "var(--color-green-dark)" }}
        >
            <Link href="/" className="logo mt-4">
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
                            className={`nav-link ${activeLink === "services" ? "active" : ""}`}
                            aria-current={activeLink === "services" ? "page" : undefined}
                            href="#services"
                            style={{
                                color: activeLink === "services" ? "var(--color-beige)" : "var(--color-white)",
                            }}
                        >
                            Especialidades
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeLink === "testimonials" ? "active" : ""}`}
                            aria-current={activeLink === "testimonials" ? "page" : undefined}
                            href="#testimonials"
                            style={{
                                color: activeLink === "testimonials" ? "var(--color-beige)" : "var(--color-white)",
                            }}
                        >
                            Depoimentos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                            aria-current={activeLink === "contact" ? "page" : undefined}
                            href="#contact"
                            style={{
                                color: activeLink === "contact" ? "var(--color-beige)" : "var(--color-white)",
                            }}
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}