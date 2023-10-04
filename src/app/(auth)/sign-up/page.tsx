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
import { db } from '@/db';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  async function addUser() {
    try {
      await db.user.add({
        email,
        name,
        password
      });

      console.log(`Friend ${name} successfully added. Got id `);
      router.push('/login');
    } catch (error) {
      console.log(`Failed to add ${name}: ${error}`);
    }
  }
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
                onChange={(e) => setName(e.target.value)}
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
          <FormControl width={400} mb={5}>
            <FormLabel>Sua Senha</FormLabel>
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <Keyhole size={24} color="#ffffff" />
              </InputLeftElement>
              <Input
                onChange={(e) => setPassword(e.target.value)}
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
        <S.Button type="button" onClick={addUser}>
          Cadastrar-se
        </S.Button>
      </S.Form>
    </main>
  );
};

export default SignUp;
