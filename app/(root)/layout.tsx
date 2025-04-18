import { Header } from '@/components/fragments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Pizza | Главная',
  description: 'Закажи пиццу, браток',
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
