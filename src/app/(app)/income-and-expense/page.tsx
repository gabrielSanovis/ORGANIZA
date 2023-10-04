'use client';
import { Button } from '@chakra-ui/react';
import React, { FormEvent, useEffect, useState } from 'react';
import * as S from './styled';
import {
  useDisclosure,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FormLabel,
  InputLeftElement,
  Stack,
  InputGroup,
  FormControl
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { Article, Money, SquaresFour } from '@phosphor-icons/react';
import { IncomeExpense, db } from '@/db';
import { useLiveQuery } from 'dexie-react-hooks';
import { Calendar } from 'phosphor-react';

type Item = {
  id: number;
  date: string;
  value: number;
  description: string;
  category: string;
};

const IncomeExpense: React.FC = () => {
  const email = 'novis@gmail';
  const [date, setDate] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('');
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      date: '2023-10-10',
      value: 50,
      description: 'Item 1',
      category: 'Categoria 1'
    },
    {
      id: 2,
      date: '2023-10-11',
      value: 50,
      description: 'Item 2',
      category: 'Categoria 2'
    },
    {
      id: 3,
      date: '2023-10-12',
      value: 50,
      description: 'Item 3',
      category: 'Categoria 3'
    },
    {
      id: 4,
      date: '2023-10-13',
      value: 50,
      description: 'Item 4',
      category: 'Categoria 4'
    },
    {
      id: 5,
      date: '2023-10-14',
      value: 50,
      description: 'Item 5',
      category: 'Categoria 5'
    }
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState('md');

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };
  const sizes = ['xs'];

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  async function addExpenseAndIncome() {
    try {
      await db.incomeExpense.add({
        email,
        categoria,
        value,
        date,
        description,
        type
      });

      console.log(`incomeExpense ${email} successfully added. Got id `);
      onClose();
    } catch (error) {
      console.log(`Failed to add ${email}: ${error}`);
    }
  }
  useLiveQuery(async () => {
    const incomeAndExpense = await db.incomeExpense
      .where('email')
      .equals(email)
      .toArray();
    setIncome([]);
    setExpense([]);
    for (let incomeOrExpense of incomeAndExpense) {
      if (incomeOrExpense.type === 'RECEITA') {
        setIncome((income: any[]): any[] => [...income, incomeOrExpense]);
      }
      if (incomeOrExpense.type === 'DESPESA') {
        setExpense((expense: any[]): any[] => [...expense, incomeOrExpense]);
      }
    }
  }, [email, isOpen]);

  const handlerDelete = (primaryKey: number) => {
    db.incomeExpense.delete(primaryKey);
  };
  console.log(income);
  return (
    <main>
      {/* <div>
        <S.Income onClick={handleOpenModal}>RECEITA</S.Income>
        {isModalOpen && <AddReceitaModal onClose={handleCloseModal} tipo={'receita'} />}
      </div> */}
      <S.TextTittle>Deseja adicionar</S.TextTittle>
      <S.Buttons>
        <>
          {sizes.map((size) => (
            <S.Income
              onClick={() => {
                handleSizeClick(size);
                setType('RECEITA');
              }}
              key={size}
            >
              {`RECEITA`}
            </S.Income>
          ))}
          {sizes.map((size) => (
            <S.Expense
              onClick={() => {
                handleSizeClick(size);
                setType('DESPESA');
              }}
              key={size}
            >
              {`DESPESA`}
            </S.Expense>
          ))}
          <Modal onClose={onClose} size={size} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Adicionar Receita</ModalHeader>
              <ModalCloseButton />
              <ModalBody>Campos obrigatórios possuem o símbolo</ModalBody>
              <form onSubmit={handleSubmit}>
                <FormControl mb={4}>
                  <FormLabel>Data:</FormLabel>
                  <Stack spacing={2} />
                  <InputGroup w="100%">
                    <InputLeftElement pointerEvents="none">
                      <Calendar size={24} color="#ffffff" />
                    </InputLeftElement>
                    <Input
                      onChange={(e) => setDate(e.target.value)}
                      type="date"
                      placeholder="DD/MM/AAAA"
                      bg="gray.800"
                      color={'white'}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Valor:</FormLabel>
                  <Stack spacing={2} />
                  <InputGroup w="100%">
                    <InputLeftElement pointerEvents="none">
                      <Money size={24} color="#ffffff" />
                    </InputLeftElement>
                    <Input
                      onChange={(e) => setValue(e.target.value)}
                      type="text"
                      placeholder="R$ 1000"
                      bg="gray.800"
                      color={'white'}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Categoria:</FormLabel>
                  <Stack spacing={2} />
                  <InputGroup w="100%">
                    <InputLeftElement pointerEvents="none">
                      <SquaresFour size={24} color="#ffffff" />
                    </InputLeftElement>
                    <Input
                      onChange={(e) => setCategoria(e.target.value)}
                      type="text"
                      placeholder="Categoria"
                      bg="gray.800"
                      color={'white'}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mb={4}>
                  <FormLabel>Descrição:</FormLabel>
                  <Stack spacing={2} />
                  <InputGroup w="100%">
                    <InputLeftElement pointerEvents="none">
                      <Article size={24} color="#ffffff" />
                    </InputLeftElement>
                    <Input
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      placeholder="Descrição"
                      bg="gray.800"
                      color={'white'}
                    />
                  </InputGroup>
                </FormControl>
                <S.Botao type="button" onClick={() => addExpenseAndIncome()}>
                  Enviar
                </S.Botao>
              </form>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </S.Buttons>

      <S.TableContainer>
        <S.TableContainerIncome>
          <Table>
            <Thead>
              <S.TitleIncome>RECEITA</S.TitleIncome>
              <Tr>
                <S.TableHeader>DATA</S.TableHeader>
                <S.TableHeader>VALOR</S.TableHeader>
                <S.TableHeader>DESCRIÇÃO</S.TableHeader>
                <S.TableHeader>CATEGORIA</S.TableHeader>
              </Tr>
            </Thead>
            <Tbody>
              {income?.map((item: IncomeExpense) => (
                <Tr key={item.pk}>
                  <Td>{item.date}</Td>
                  <Td>{item.value}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.categoria}</Td>
                  <Td>
                    <Button onClick={() => handlerDelete(item.pk)}>
                      Excluir
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </S.TableContainerIncome>

        <S.TableContainerExpense>
          <Table>
            <Thead>
              <S.TitleExpense>DESPESAS</S.TitleExpense>
              <Tr>
                <S.TableHeader>DATA</S.TableHeader>
                <S.TableHeader>VALOR</S.TableHeader>
                <S.TableHeader>DESCRIÇÃO</S.TableHeader>
                <S.TableHeader>CATEGORIA</S.TableHeader>
              </Tr>
            </Thead>
            <Tbody>
              {expense?.map((item: IncomeExpense) => (
                <Tr key={item.pk}>
                  <Td>{item.date}</Td>
                  <Td>{item.value}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.categoria}</Td>
                  <Td>
                    <Button onClick={() => handlerDelete(item?.pk)}>
                      Excluir
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </S.TableContainerExpense>
      </S.TableContainer>
    </main>
  );
};

export default IncomeExpense;
