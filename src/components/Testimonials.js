import styles from './Testimonials.module.css';

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-5">
            <h2
                className={`${styles.title} animate__animated animate__zoomIn display-4 text-center fw-bold`}
            >
                O que dizem nossos pacientes
            </h2>
            <div>
                {/* Adicione depoimentos reais aqui */}
                <ul className={styles.slide}>
                    <li className={styles.list}>
                        A Dra. Natielle mudou minha vida! Agora me sinto muito mais saudável. A consulta nutricional comecou a ser uma parte importante de minha vida e estou muito grata por ter encontrado a Dra.  Obrigada, Natielle!
                    </li>
                </ul>
                {/* Outro depoimento */}
            </div>
        </section >
    );
}