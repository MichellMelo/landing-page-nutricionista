/* eslint-disable react/no-unescaped-entities */
// Importações necessárias
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos do Swiper
import "swiper/css/pagination"; // Estilos para paginação (opcional)
import "swiper/css/navigation"; // Estilos para navegação (opcional)
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Módulos adicionais do Swiper
import Heading from "./Heading"; // Certifique-se de que o componente Heading está no caminho correto

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-5 mt-4">
            <Heading
                text="Depoimentos dos pacientes"
            />
            <div>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]} // Ativando os módulos necessários
                    spaceBetween={30} // Espaçamento entre slides
                    slidesPerView={1} // Quantos slides aparecem de uma vez (ajustável)
                    pagination={{ clickable: true }} // Habilita a paginação (bolinhas)
                    navigation={true} // Habilita botões de navegação (anterior/próximo)
                    className="swiper"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={5000}
                >
                    {/* Depoimento 1 */}
                    <SwiperSlide>
                        <p className="swiper-slide">
                            "Natielle, estou passando para dar um feedback. Estou há 15 dias seguindo uma reeducação alimentar e preciso dizer: melhorei minha disposição, meu sono e, o melhor, parece que meu corpo desinflamou. Estou me sentindo menos inchado. Obrigado pelo serviço!"
                        </p>
                        <p className="swiper-author">
                            Johnata Silva
                        </p>
                    </SwiperSlide>

                    {/* Depoimento 2 */}
                    <SwiperSlide>
                        <p className="swiper-slide">
                            "Estou me sentindo muito mais disposta! Antes, vivia com sono o tempo todo, e agora isso praticamente desapareceu. Também percebi que, antes, eu comia demais e, mesmo assim, não me sentia satisfeita. Agora, consigo me sentir cheia com bem menos. Outra mudança incrível foi em relação à água: antes, eu quase não bebia e nem sentia sede. Agora, com o hábito de tomar água regularmente, sinto sede ao longo do dia, mas de forma equilibrada, e não aquela sensação extrema de passar o dia inteiro sem beber."
                        </p>
                        <p className="swiper-author">
                            Brena Morais
                        </p>
                    </SwiperSlide>

                    {/* Depoimento 3 */}
                </Swiper>
            </div>
        </section>
    );
}