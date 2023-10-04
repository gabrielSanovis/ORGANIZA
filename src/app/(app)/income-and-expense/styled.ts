import styled from 'styled-components';

export const TextTittle = styled.h3`
  padding: 32px 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #262626;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const Income = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 104px;
  height: 51px;
  background: #34d01a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: inline-block;
  margin-left: 16px;
`;

export const Expense = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 104px;
  height: 51px;
  background: #ff1b1c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: inline-block;
  margin-left: 16px;
`;

export const Buttons = styled.div`
  padding: 0px 0px 32px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const TableContainerIncome = styled.table`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 24px 16px;
  gap: 16px;
  width: 100%; /* Alterado para ocupar 100% da largura do contêiner pai */
  max-width: 536px; /* Define uma largura máxima para evitar que a tabela fique muito larga */
  height: auto; /* Alterado para se ajustar automaticamente ao conteúdo */
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media (max-width: 768px) {
    /* Estilos para telas menores que 768px de largura */
    padding: 16px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    /* Estilos para telas menores que 480px de largura */
    padding: 12px;
    gap: 8px;
    border-radius: 0; /* Remover o raio de borda para telas menores */
  }
`;

export const Botao = styled.button`
  background-color: #1a202c;
  color: #fff;
  margin-bottom: 2.5%;
  width: 100%;
  height: 3em;
`;

export const TableContainerExpense = styled.table`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 24px 16px;
  gap: 16px;
  width: 100%; /* Alterado para ocupar 100% da largura do contêiner pai */
  max-width: 536px; /* Define uma largura máxima para evitar que a tabela fique muito larga */
  height: auto; /* Alterado para se ajustar automaticamente ao conteúdo */
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media (max-width: 768px) {
    /* Estilos para telas menores que 768px de largura */
    padding: 16px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    /* Estilos para telas menores que 480px de largura */
    padding: 12px;
    gap: 8px;
    border-radius: 0; /* Remover o raio de borda para telas menores */
  }
`;

export const TableContainer = styled.table`
  justify-content: space-around;
  display: flex;
  flex-direction: row;
`;

export const TitleIncome = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #262626;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const TitleExpense = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #262626;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const TableHeader = styled.th`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #262626;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
