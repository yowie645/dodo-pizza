import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/fragments/header';

const comfortaa = Comfortaa({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title:
    'Пицца — заказать с доставкой на дом бесплатно, доставка еды и напитков', //todo сделать с привязкой к определенному городу Пицца МСК и т.д
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={comfortaa.variable}>
        <Header />
        <main className='min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
