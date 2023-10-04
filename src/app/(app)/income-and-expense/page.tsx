'use client';
import { Link } from '@chakra-ui/next-js';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';
/* import Buttons from './buttons/appButton'; */
import React, { useState } from 'react';
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
  name: string;
};

const IncomeExpense: React.FC = () => {
  /* const handleClick1 = () => {
    alert('O botão1 foi clicado!');
  };
  const handleClick2 = () => {
    alert('O botão2 foi clicado!');
  }; */
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleDelete = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  return (
    <main>
      <h1>ORGANIZA RECEITA E DESPESA</h1>
      <Link href={'/'} color="blue.400" _hover={{ color: 'blue.500' }}>
        IR PARA HOME
      </Link>
      {/* <h3>Deseja adicionar</h3> */}
      <S.TextTittle>Deseja adicionar?</S.TextTittle>
      {/* <Buttons onClick={handleClick1} label="Botão 1" />
      <br />
      <Buttons onClick={handleClick2} label="Botão 2" /> */}
      <S.Income>Receita</S.Income>
      <S.Expense>Despesa</S.Expense>
      <S.TableContainerIncome>
        <Table variant="simple">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <h1>Receita</h1>
            <Tr>
              <Th>Data</Th>
              <Th isNumeric>Valor</Th>
              <Th>Descrição</Th>
              <Th>Categoria</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>04/09/2023</Td>
              <Td isNumeric>R$ 15.000</Td>
              <Td>VENDA</Td>
              <Td>VENDAS</Td>
            </Tr>
            <Tr>
              <Td>04/09/2023</Td>
              <Td isNumeric>R$ 15.000</Td>
              <Td>VENDA</Td>
              <Td>VENDAS</Td>
            </Tr>
            <Tr>
              <Td>04/09/2023</Td>
              <Td isNumeric>R$ 15.000</Td>
              <Td>VENDA</Td>
              <Td>VENDAS</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>04/09/2023</Td>
              <Td isNumeric>R$ 15.000</Td>
              <Td>VENDA</Td>
              <Td>VENDAS</Td>
            </Tr>
          </Tfoot>
          <Tfoot>
            <Tr>
              <Td>04/09/2023</Td>
              <Td isNumeric>R$ 15.000</Td>
              <Td>VENDA</Td>
              <Td>VENDAS</Td>
            </Tr>
          </Tfoot>
        </Table>
      </S.TableContainerIncome>

      <S.TableContainerExpense>
        <Table variant="simple">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <h1>Despesa</h1>
            <Tr>
              <Th>Data</Th>
              <Th isNumeric>Valor</Th>
              <Th>Descrição</Th>
              <Th>Categoria</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </S.TableContainerExpense>

      <h1>Itens</h1>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>
                <Button onClick={() => handleDelete(item.id)}>Excluir</Button>
                <Button>Editar</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </main>
  );
};

export default IncomeExpense;
