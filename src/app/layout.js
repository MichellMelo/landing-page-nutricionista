import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from 'components/Header';

export const metadata = {
  title: 'Nutricionista Natielle - Transforme sua Saúde',
  description: 'Landing page de uma nutricionista profissional.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}