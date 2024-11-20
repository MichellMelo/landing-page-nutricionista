import Head from 'next/head';
import Hero from 'components/Hero';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import ContactForm from 'components/ContactForm';

export const metadata = {
  title: 'Nutricionista Natielle - Transforme sua Saúde',
  description: 'Landing page de uma nutricionista profissional.',
};

export default function Home() {
  return (
    <>
      {/* Componentes da página */}
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
    </>
  );
}