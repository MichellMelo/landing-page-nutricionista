import Heading from "./Heading";
import Card from "./Card";

export default function Services() {

    return (
        <section
            id="services"
            className="py-5">
            <Heading text="Minhas Especialidades" />
            <div className="container">
                <div className="row gx-4 gy-5 mt-4">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <Card
                            h3="Emagrecimento e Obesidade"
                            topics={[
                                "A obesidade é reconhecida como um dos maiores desafios de saúde pública, tanto no Brasil quanto globalmente. A nutrição exerce um papel crucial na prevenção e no tratamento, contribuindo para a promoção da saúde e a melhoria da qualidade de vida."
                            ]}
                            img="/images/obesidade.jpg"
                            alt="Emagrecimento e Obesidade"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <Card
                            h3="Nutrição Esportiva"
                            topics={[
                                "Aplicação dos conhecimentos em nutrição clínica no esporte permite atender as demandas energéticas específicas de cada modalidade. Essa abordagem assegura o fornecimento adequado de nutrientes, otimizando o desempenho físico, promovendo a recuperação muscular e mantendo o equilíbrio metabólico de acordo com as necessidades individuais."
                            ]}
                            img="/images/esportiva.jpg"
                            alt="Nutrição Esportiva"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <Card
                            h3="Intolerâncias Alimentares"
                            topics={[
                                "Existem diferentes tipos de intolerâncias e alergias alimentares, que podem causar reações adversas no organismo. A nutrição tem um papel essencial na identificação dos alimentos desencadeadores e na elaboração de uma dieta personalizada e equilibrada, promovendo a saúde e prevenindo deficiências nutricionais."
                            ]}
                            img="/images/intolerancia.jpg"
                            alt="Intolerâncias Alimentares"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}