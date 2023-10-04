'use client';
import { db } from '@/db';
import * as S from './styled';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  FormLabel,
  Input,
  Image,
  InputLeftElement,
  Stack,
  InputGroup,
  FormControl
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const getUser = async () => {
    const user = await db.user.get(email);
    if (user?.password === password) {
      router.push('/dashboard');
    }
    console.log(user?.password === password);
  };
  return (
    <main>
      <S.Form>
        <Image
          boxSize="350px"
          src="images/logo_transparent.png"
          alt="Foto da logo"
        />
        <div>
          <FormControl width={400} mb={6}>
            <FormLabel>E-mail</FormLabel>
            <Stack spacing={4} />
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.50" />
              </InputLeftElement>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@email.com"
                bg="gray.800"
                color={'white'}
              />
            </InputGroup>
          </FormControl>
        </div>
        <div>
          <FormControl width={400} mb={6}>
            <FormLabel>Sua senha</FormLabel>
            <Stack spacing={4} />
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.50" />
              </InputLeftElement>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="*********"
                bg="gray.800"
                color={'white'}
              />
            </InputGroup>
          </FormControl>
        </div>
        <S.Botao type="button" onClick={getUser}>
          Entrar
        </S.Botao>
        <S.Botao type="button" onClick={() => router.push('/sign-up')}>
          Cadastrar-se
        </S.Botao>
      </S.Form>
    </main>
  );
};

export default Login;
