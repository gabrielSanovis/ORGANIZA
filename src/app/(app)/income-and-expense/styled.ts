import styled from 'styled-components';

export const TextTittle = styled.h3`
  text-align: center;
`;
export const Income = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 95px;
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
  width: 95px;
  height: 51px;
  background: #ff1b1c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: inline-block;
  margin-left: 16px;
`;

export const TableContainerIncome = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  gap: 16px;
  width: 536px;
  height: 340px;
  left: 96px;
  top: 192px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const TableContainerExpense = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  gap: 16px;
  width: 536px;
  height: 340px;
  left: 96px;
  top: 192px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;