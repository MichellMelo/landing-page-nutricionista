/* eslint-disable react/no-unescaped-entities */
// Importações necessárias
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos do Swiper
import "swiper/css/effect-fade";
import "swiper/css/pagination"; // Estilos para paginação (opcional)
import "swiper/css/navigation"; // Estilos para navegação (opcional)
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules"; // Módulos adicionais do Swiper
import styles from "./Testimonials.module.css"; // Certifique-se de ajustar o caminho do CSS
import Heading from "./Heading"; // Certifique-se de que o componente Heading está no caminho correto

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-5 mt-5">
            <Heading
                className={styles.title}
                text="O que nossos pacientes estão dizendo"
            />
            <div>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay, EffectFade]} // Ativando os módulos necessários
                    effect="fade"
                    spaceBetween={30} // Espaçamento entre slides
                    slidesPerView={1} // Quantos slides aparecem de uma vez (ajustável)
                    pagination={{ clickable: true }} // Habilita a paginação (bolinhas)
                    navigation={true} // Habilita botões de navegação (anterior/próximo)
                    className="swiper"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={1000}
                >
                    {/* Depoimento 1 */}
                    <SwiperSlide>
                        <p className="swiper-slide">
                            "Natielle, só passando pra dar um feedback. Estou 15 dias fazendo minha dieta e tenho que falar, já melhorei minha disposição, meu sono e o melhor, sinto que meu corpo desinflamou, estou me sentindo menos inchado. Obrigado pelo serviço."
                        </p>
                    </SwiperSlide>

                    {/* Depoimento 2 */}
                    <SwiperSlide>
                        <p className="swiper-slide">
                            "O acompanhamento online foi essencial para eu alcançar meus objetivos. Recomendo muito! A Dra. Natielle é incrível."
                        </p>
                    </SwiperSlide>

                    {/* Depoimento 3 */}
                    <SwiperSlide>
                        <p className="swiper-slide">
                            Nunca imaginei que pequenas mudanças na alimentação fariam tanta diferença. Obrigada pela dedicação e cuidado!
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}