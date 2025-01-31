"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { debounce } from "lodash";

export default function Header() {
    const [activeLink, setActiveLink] = useState(null);

    const debouncedHandleScroll = useMemo(
        () =>
            debounce(() => {
                const sections = document.querySelectorAll("section");
                let currentSection = null;
                const scrollY = window.scrollY;

                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollY >= sectionTop - window.innerHeight * 0.3 &&
                        scrollY < sectionTop + sectionHeight
                    ) {
                        currentSection = section.getAttribute("id");
                    }
                });

                setActiveLink(currentSection);
            }, 100),
        []
    );

    useEffect(() => {
        window.addEventListener("scroll", debouncedHandleScroll);
        debouncedHandleScroll(); // Define o estado inicial corretamente

        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
            debouncedHandleScroll.cancel(); // Evita vazamento de memória
        };
    }, [debouncedHandleScroll]);

    const navLinks = [
        { id: "services", label: "Especialidades" },
        { id: "testimonials", label: "Depoimentos" },
        { id: "contact", label: "Contato" },
    ];

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
                    {navLinks.map(({ id, label }) => (
                        <li key={id} className="nav-item">
                            <a
                                className={`nav-link ${activeLink === id ? "active" : ""}`}
                                aria-current={activeLink === id ? "page" : undefined}
                                href={`#${id}`}
                                style={{
                                    color: activeLink === id ? "var(--color-beige)" : "var(--color-white)",
                                }}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
