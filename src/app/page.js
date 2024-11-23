import Hero from 'components/Hero';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import ContactForm from 'components/ContactForm';

export const metadata = {
  title: 'Natielle Holanda | Nutricionista',
  description: 'Nutricionista clínica e esportiva.',
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