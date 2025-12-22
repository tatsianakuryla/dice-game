import { Roboto } from 'next/font/google';

import type { Metadata } from 'next';
import type { ReactNode, JSX } from 'react';

import './globals.css';

const roboto = Roboto({
  variable: '--roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dice game',
  description:
    'A dice game uses one or more dice as its central component, relying on random rolls to determine outcomes like scoring points, moving pieces, or completing challenges, with players often competing or collaborating to reach goals',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
