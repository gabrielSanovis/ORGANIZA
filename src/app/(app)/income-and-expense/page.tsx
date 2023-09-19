'use client';
import { Link } from '@chakra-ui/next-js';

const IncomeExpense = () => {
  return (
    <main>
      <h1>ORGANIZA RECEITA E DESPESA</h1>
      <Link href={'/'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA HOME
      </Link>
    </main>
  );
};

export default IncomeExpense;
