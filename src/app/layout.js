import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from 'components/Header';
import Footer from 'components/Footer';

export const metadata = {
  title: 'Natielle Holanda | Nutricionista',
  description: 'Nutricionista clínica e esportiva.',
  icons: {
    icon: './favicon.ico'
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