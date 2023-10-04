'use client';
import { Envelope, Keyhole, User } from '@phosphor-icons/react';
import * as S from './stlyed';
import {
  FormControl,
  FormLabel,
  Input,
  Image,
  InputLeftElement,
  InputGroup
} from '@chakra-ui/react';

const SignUp = () => {
  return (
    <main>
      <S.Form>
        <Image boxSize="300px" src="images/logo_transparent.png" alt="Logo" />
        <div>
          <FormControl width={400} mb={5}>
            <FormLabel>Nome</FormLabel>
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <User size={24} color="#ffffff" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Nome"
                bg="gray.800"
                color={'white'}
              />
            </InputGroup>
          </FormControl>
        </div>
        <div>
          <FormControl width={400} mb={5}>
            <FormLabel>E-mail</FormLabel>
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <Envelope size={24} color="#ffffff" />
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
          <FormControl width={400} mb={5}>
            <FormLabel>Sua Senha</FormLabel>
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <Keyhole size={24} color="#ffffff" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="**********"
                bg="gray.800"
                color={'white'}
              />
            </InputGroup>
          </FormControl>
        </div>
        <div>
          <FormControl width={400} mb={5}>
            <FormLabel>Confirme a senha</FormLabel>
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <Keyhole size={24} color="#ffffff" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="**********"
                bg="gray.800"
                color={'white'}
              />
            </InputGroup>
          </FormControl>
        </div>
        <S.Button>Cadastrar-se</S.Button>
      </S.Form>
    </main>
  );
};

export default SignUp;
