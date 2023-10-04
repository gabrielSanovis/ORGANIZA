'use client';
import { Link } from '@chakra-ui/next-js';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from '@chakra-ui/react';
import {
  useDisclosure,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
/* import Buttons from './buttons/appButton'; */
import React, { FormEvent, useState } from 'react';
import * as S from './styled';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react';

type Item = {
  id: number;
  date: string;
  value: number;
  description: string;
  category: string;
};

const IncomeExpense: React.FC = () => {
  const [data, setData] = useState<string>('');
  const [valor, setValor] = useState<number | string>('');
  const [categoria, setCategoria] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleDelete = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
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
            <S.Income onClick={() => handleSizeClick(size)} key={size}>
              {`RECEITA`}
            </S.Income>
          ))}
          {sizes.map((size) => (
            <S.Expense onClick={() => handleSizeClick(size)} key={size}>
              {`DESPESA`}
            </S.Expense>
          ))}
          <Modal onClose={onClose} size={size} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Adicionar Receita</ModalHeader>
              <ModalCloseButton />
              <ModalBody>Campos obrigatórios possuem o símbolo</ModalBody>
              <div className="modal">
                <div className="modal-content">
                  <button>Adicionar Receita</button>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="data">Data:</label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                      required
                    />

                    <label htmlFor="valor">Valor:</label>
                    <input
                      type="number"
                      id="valor"
                      name="valor"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                      step="0.01"
                      required
                    />

                    <label htmlFor="categoria">Categoria:</label>
                    <input
                      type="text"
                      id="categoria"
                      name="categoria"
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                      required
                    />

                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                      id="descricao"
                      name="descricao"
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      rows={4}
                      required
                    />

                    <button type="submit">Adicionar Receita</button>
                  </form>
                </div>
              </div>
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
              {items.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.date}</Td>
                  <Td>{item.value}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.category}</Td>
                  <Td>
                    <Button onClick={() => handleDelete(item.id)}>
                      Excluir
                    </Button>
                    <Button>Editar</Button>
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
                <Th>DATA</Th>
                <Th>VALOR</Th>
                <Th>DESCRIÇÃO</Th>
                <Th>CATEGORIA</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.date}</Td>
                  <Td>{item.value}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.category}</Td>
                  <Td>
                    <Button onClick={() => handleDelete(item.id)}>
                      Excluir
                    </Button>
                    <Button>Editar</Button>
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
