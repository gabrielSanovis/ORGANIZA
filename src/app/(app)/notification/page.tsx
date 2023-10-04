'use client';
import { Link } from '@chakra-ui/next-js';
import * as S from './styled';

const Notification = () => {
  return (
    <main>
      <S.TextBox />
      <h1>ORGANIZA NOTIFICAÇÕES</h1>
      <Link href={'/'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA HOME
      </Link>
    </main>
  );
};

export default Notification;
