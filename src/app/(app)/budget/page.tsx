'use client';
import { Link } from '@chakra-ui/next-js';

const Budget = () => {
  return (
    <main>
      <h1>ORGANIZA ORÇAMENTO</h1>
      <Link href={'/'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA HOME
      </Link>
    </main>
  );
};

export default Budget;
