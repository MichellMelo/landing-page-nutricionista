"use client";
import { useState } from 'react'; // Para manipulação de estado
import styles from './ContactForm.module.css';
import Heading from './Heading';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [alert, setAlert] = useState(null); // Alerta de sucesso ou erro

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Enviar os dados para o backend (Firestore)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setAlert({ message: 'Mensagem enviada com sucesso!', type: 'success' });
                // Limpar o formulário
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });

                // Remover o alerta após 5 segundos com transição suave
                setTimeout(() => setAlert(null), 5000);
            } else {
                setAlert({ message: 'Houve um erro ao enviar a mensagem. Tente novamente.', type: 'error' });
            }
        } catch (error) {
            setAlert({ message: 'Erro ao enviar os dados. Por favor, tente novamente.', type: 'error' });
            console.error("Error sending form data: ", error);
        }
    };

    return (
        <section id="contact" className="py-5 mt-5">
            {/* Exibir a mensagem de sucesso ou erro */}
            {alert && (
                <div className={`${styles.alert} ${alert.type === 'success' ? styles['alert-success'] : styles['alert-danger']}`}>
                    {alert.message}
                </div>
            )}

            <Heading className={styles.contactTitle} text="Entre em Contato" />
            <form className={`${styles.form} mt-4`} onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="block mb-2">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="block mb-2">
                            Telefone:
                        </label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="email" className="block mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-12">
                        <label htmlFor="message" className="block mb-2 mt-3">
                            Mensagem:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="form-control"
                        ></textarea>
                    </div>
                </div>
                <div className={`${styles["button-container"]}d-flex flex-wrap justify-content-center`}>
                    <button type="submit" className={`${styles.button}`}>
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    );
}
