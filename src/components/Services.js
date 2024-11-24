import Image from "next/image";
import Heading from "./Heading";
import Card from "./Card";

export default function Services() {

    return (
        <section
            id="services"
            className="py-5">
            <Heading text="Nossos Serviços" />
            <div className="container">
                <div className="row gx-4 gy-5 mt-4">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <Card
                            h3="Consulta Nutricional"
                            topics={[
                                "Anamnese Nutricional",
                                "Plano alimentar individualizado",
                                "Avaliação Antropométrica",
                            ]}
                            img="/images/consulta.jpg"
                            alt="Consulta Nutricional"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <Card
                            h3="Acompanhamento Online"
                            topics={[
                                "Atendimento em qualquer lugar, a qualquer hora",
                                "Redução de custos com deslocamento",
                                "Adaptação à rotina do paciente"
                            ]}
                            img="/images/teleconsulta.jpg"
                            alt="Teleconsulta"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <Card
                            h3="Reeducação Alimentar"
                            topics={[
                                "Avaliar padrões alimentares atuais",
                                "Receber orientações personalizadas",
                                "Introduzir mudanças graduais"
                            ]}
                            img="/images/reeducacao.jpg"
                            alt="Reedução Alimentar"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}