import type { Metadata } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio pessoal desenvolvido com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="bg-gray-900 text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}