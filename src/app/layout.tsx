import type { Metadata } from 'next';
import '@/styles/global.scss';
import { Aside } from '@/components/organisms/aside/Aside';
import { Navbar } from '@/components/organisms/navbar/Navbar';
import { Comfortaa } from 'next/font/google';
import { TopBlur } from '@/components/atoms/top-blur/TopBlur';

const font = Comfortaa({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Анна Ведьгун',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} body`}>
        <TopBlur />
        <div className="container layout">
          <Aside />
          <div className="scroll-view">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
