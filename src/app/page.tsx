'use client';
import { Link } from '@chakra-ui/next-js';

export default function Page() {
  return (
    <main>
      <h1>ORGANIZA</h1>
      <Link href={'/login'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA LOGIN
      </Link>
      <br />
      <Link href={'/sign-up'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA CADASTRO
      </Link>
      <br />
      <Link href={'/dashboard'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA PAINEL
      </Link>
      <br />
      <Link
        href={'/income-and-expense'}
        color="blue.400"
        _hover={{ color: 'blue.500' }}
      >
        IR PARA RECEITA E DESPESA
      </Link>
      <br />
      <Link href={'/budget'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA ORÇAMENTO
      </Link>
      <br />
      <Link
        href={'/investment'}
        color="blue.400"
        _hover={{ color: 'blue.500' }}
      >
        IR PARA INVESTIMENTO
      </Link>
      <br />
      <Link
        href={'/notification'}
        color="blue.400"
        _hover={{ color: 'blue.500' }}
      >
        IR PARA NOTIFICAÇÃO
      </Link>
    </main>
  );
}
