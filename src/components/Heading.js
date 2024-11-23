// components/Heading.js
"use client";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({ text }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
        });
    })

    return (
        <h2
            data-aos="fade-up"
            className="display-4 text-center fw-bold mb-5"
            style={{
                color: 'var(--color-green-dark)'
            }}
        >
            {text}
        </h2>
    );
};

export default Heading;