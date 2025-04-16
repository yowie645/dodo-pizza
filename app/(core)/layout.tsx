import type { Metadata } from 'next';

import { Header } from '@/components/fragments/header';

export const metadata: Metadata = {
  title:
    'Пицца — заказать с доставкой на дом бесплатно, доставка еды и напитков', //todo сделать с привязкой к определенному городу Пицца МСК и т.д
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='min-h-screen'>
      <Header />
      {children}
    </main>
  );
}
