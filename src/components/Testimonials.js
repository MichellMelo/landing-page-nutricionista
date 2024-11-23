import Heading from './Heading';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-5">
            <Heading
                className={styles.title}
                text="O que nossos pacientes estão dizendo" />
            <div>
                {/* Adicione depoimentos reais aqui */}
                <ul className={styles.slide}>
                    <li
                        className={styles.list}>
                        A Dra. Natielle mudou minha vida! Agora me sinto muito mais saudável. A consulta nutricional comecou a ser uma parte importante de minha vida e estou muito grata por ter encontrado a Dra.  Obrigada, Natielle!
                    </li>
                </ul>
                {/* Outro depoimento */}
            </div>
        </section >
    );
}