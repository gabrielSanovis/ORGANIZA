'use client';
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

const Login = () => {
  return (
    <main>
      <S.Form>
        <Image
          boxSize="350px"
          src="images/logo_transparent.png"
          alt="Foto da logo"
        />
        <div>
          <FormControl width={400} mb={10}>
            <FormLabel>E-mail</FormLabel>
            <Stack spacing={4} />
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.50" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="example@email.com"
                bg="gray.800"
                color={'white'}
              />
            </InputGroup>
          </FormControl>
        </div>
        <div>
          <FormControl width={400} mb={10}>
            <FormLabel>Sua senha</FormLabel>
            <Stack spacing={4} />
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.50" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="*********"
                bg="gray.800"
                color={'white'}
              />
            </InputGroup>
          </FormControl>
        </div>
        <S.Botao>Entrar</S.Botao>
        <S.Botao>Cadastrar-se</S.Botao>
      </S.Form>
    </main>
  );
};

export default Login;
