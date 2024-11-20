import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="py-5">
            <h2
                className="animate__animated animate__zoomIn display-4 text-center fw-bold mb-5"
                style={{
                    color: 'var(--color-green-dark)',
                    animationDuration: '2s',
                }}
            >
                Serviços Oferecidos
            </h2>
            <div className="container">
                <div className="row gx-4 gy-5">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm border-0 text-center">
                            <div className="card-img-top overflow-hidden rounded-top">
                                <Image
                                    src="/images/consulta.jpg"
                                    alt="Consulta Nutricional"
                                    width={350}
                                    height={180}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h3 className="h5 fw-bold">Consulta Nutricional</h3>
                                <p className="text-muted">Plano alimentar personalizado.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm border-0 text-center">
                            <div className="card-img-top overflow-hidden rounded-top">
                                <Image
                                    src="/images/teleconsulta.jpg"
                                    alt="Acompanhamento Online"
                                    width={350}
                                    height={180}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h3 className="h5 fw-bold">Acompanhamento Online</h3>
                                <p className="text-muted">Suporte contínuo via teleconsulta.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm border-0 text-center">
                            <div className="card-img-top overflow-hidden rounded-top">
                                <Image
                                    src="/images/reeducacao.jpg"
                                    alt="Reeducação Alimentar"
                                    width={350}
                                    height={180}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h3 className="h5 fw-bold">Reeducação Alimentar</h3>
                                <p className="text-muted">Orientações para uma alimentação saudável.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}