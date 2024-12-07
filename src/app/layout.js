import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from 'components/Header';
import Footer from 'components/Footer';

export const metadata = {
  title: 'Natielle Holanda | Nutricionista',
  description: 'Nutricionista clínica e esportiva.',
  icons: {
    icon: './favicon.ico'
  },
  openGraph: {
    title: 'Natielle Holanda | Nutricionista',
    description: 'Nutricionista clínica e esportiva.',
    url: 'https://natielleholandanutricionista.vercel.app/',
    siteName: 'Natielle Holanda | Nutricionista',
    images: [
      {
        url: 'https://natielleholandanutricionista.vercel.app/images/preview.jpg',
        with: 1200,
        height: 630,
        alt: 'Natielle Holanda | Nutricionista'
      }
    ],
    locale: 'pt-BR',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}