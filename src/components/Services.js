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
                            p="Consulta Nutricional"
                            img="/images/consulta.jpg"
                            alt="Consulta Nutricional"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <Card
                            h3="Acompanhamento Online"
                            p="Acompanhamento Online"
                            img="/images/teleconsulta.jpg"
                            alt="Teleconsulta"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <Card
                            h3="Reeducação Alimentar"
                            p="Orientações para uma alimentação saudável"
                            img="/images/reeducacao.jpg"
                            alt="Reedução Alimentar"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}