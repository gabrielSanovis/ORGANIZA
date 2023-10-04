'use client';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Providers } from './providers';
import * as S from './(auth)/login/styled';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>ORGANIZA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
