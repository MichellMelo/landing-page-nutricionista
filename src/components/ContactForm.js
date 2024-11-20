export default function ContactForm() {
    return (
        <section id="contact" className="py-12">
            <h2 className="text-center display-4 font-bold mb-8" style={{ color: 'var(--color-green-dark)', margin: '2rem 0', paddingTop: '5rem' }}>Entre em Contato</h2>
            <form className="" style={{ backgroundColor: 'var(--color-beige)', padding: '3rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', margin: '0 10rem' }}>
                <label htmlFor="name" className="block mb-2">Nome:</label>
                <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded mb-4" />

                <label htmlFor="email" className="block mb-2">Email:</label>
                <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded mb-4" />

                <label htmlFor="message" className="block mb-2">Mensagem:</label>
                <textarea id="message" name="message" rows={4} required className="w-full p-2 border border-gray-300 rounded"></textarea>

                <button type="submit" className="mt-4 w-full py-2" style={{ backgroundColor: 'var(--color-green-dark)', color: 'var(--color-white)', borderRadius: '1rem' }}>Enviar Mensagem</button>
            </form>
        </section>
    );
}