'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Providers } from './providers';
import * as S from './(auth)/login/styled';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'ORGANIZA',
  description: 'ORGANIZE SUAS FINANÇAS',
  icons: '/images/favicon.ico',
  generator: 'Next.js 13.4.19',
  applicationName: 'Organiza',
  keywords: ['finanças', 'investimento', 'organizar', 'dinheiro'],
  authors: [{ name: 'Gabriel Santos' }],
  colorScheme: 'light',
  creator: 'Gabriel Santos',
  publisher: 'Organiza Team',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Providers>
          {children}
          <div className="footer">
            <S.Footer className="texto-footer">
              Copyright © 2023 by Organiza. Todos os direitos reservados
            </S.Footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
