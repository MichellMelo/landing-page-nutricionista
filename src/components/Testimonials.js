export default function Testimonials() {
    return (
        <section id="testimonials" className="py-12 vh-100">
            <h2 className="display-4 text-center font-bold" style={{ color: 'var(--color-green-dark)', margin: '2rem 0', paddingTop: '7rem' }}>O que dizem nossos pacientes</h2>
            <div className="">
                {/* Adicione depoimentos reais aqui */}
                <blockquote className="d-flex justify-content-center" style={{
                    margin: '5rem 15rem', textAlign: 'center'
                }}>
                    A Dra. Natielle mudou minha vida! Agora me sinto muito mais saudável. A consulta nutricional comecou a ser uma parte importante de minha vida e estou muito grata por ter encontrado a Dra.. Obrigada, Natielle!
                </blockquote>
                {/* Outro depoimento */}
            </div>
        </section >
    );
}