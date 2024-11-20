import styles from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <section id="contact" className="py-5">
            <h2
                className={`${styles.contactTitle} animate__animated animate__zoomIn display-4 text-center fw-bold`}
            >
                Entre em Contato
            </h2>
            <form
                className={`${styles.form} mt-4`}
            >
                <div className='row g-3'>
                    <div className='col-md-6'>
                        <label
                            htmlFor="name"
                            className="block mb-2"
                        >
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="form-control"
                        />
                    </div>
                    <div className='col-md-6'>
                        <label
                            htmlFor="email"
                            className="block mb-2"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="form-control"
                        />
                    </div>
                </div>
                <div className='row g-3'>
                    <div className='col-md-12'>
                        <label
                            htmlFor="message"
                            className="block mb-2 mt-3"
                        >
                            Mensagem:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="form-control">
                        </textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className={`${styles.button}`}
                    >
                        Enviar Mensagem
                    </button>
                </div>
            </form>
        </section>
    );
}