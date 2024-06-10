import type { Metadata } from 'next';
import './globals.css';
import { inter, lusitana } from './lib/fonts';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Sidenav from './components/sidenav';

export const metadata: Metadata = {
  title: 'Hotel Express',
  description: 'Hotel Express management system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex p-6 gap-8">
          <nav className="flex flex-col flex-none gap-4">
            <div className="flex flex-col gap-4 bg-zinc-900 text-zinc-100 rounded-xl p-6">
              <BuildingOfficeIcon className="size-12" />
              <h1 className={`${lusitana.className} text-2xl`}>
                Hotel Express
              </h1>
            </div>
            <Sidenav />
          </nav>
          <div className="flex flex-col gap-4 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
