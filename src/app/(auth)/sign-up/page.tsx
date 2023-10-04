'use client';
import * as S from './stlyed';
import { Link } from '@chakra-ui/next-js';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const SignUp = () => {
  return (
    <main>
      <div>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input type="text" placeholder="Nome" />
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" placeholder="example@email.com" />
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel>Sua Senha</FormLabel>
          <Input type="password" placeholder="**********" />
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel>Confirme a senha</FormLabel>
          <Input type="password" placeholder="**********" />
        </FormControl>
      </div>
      <S.Button>Cadastrar-se</S.Button>
    </main>
  );
};

export default SignUp;
