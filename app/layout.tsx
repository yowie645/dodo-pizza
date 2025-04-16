import { Comfortaa } from 'next/font/google';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          data-rh='true'
          rel='icon'
          href='/logo.png'
        />
      </head>
      <body className={comfortaa.variable}>{children}</body>
    </html>
  );
}
