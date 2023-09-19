'use client';
import { Link } from '@chakra-ui/next-js';

const Dashboard = () => {
  return (
    <main>
      <h1>ORGANIZA PAINEL</h1>
      <Link href={'/'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA HOME
      </Link>
    </main>
  );
};

export default Dashboard;
