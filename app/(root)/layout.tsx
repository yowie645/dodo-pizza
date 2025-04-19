import { Header } from '@/components/fragments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Пицца — заказать с доставкой на дом бесплатно, доставка еды и напитков', //todo сделать с привязкой к определенному городу Пицца МСК и т.д
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className='min-h-screen'>
      <Header />
      {children}
      {modal}
    </main>
  );
}
