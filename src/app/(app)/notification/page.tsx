'use client';
import { TextBox } from './styled';
import { ChartLineUp, ChartPieSlice } from '@phosphor-icons/react';
const Notification = () => {
  return (
    <main>
      <h1>NOTIFICAÇÕES</h1>

      <TextBox>
        <ChartLineUp size={24} /> Faça seu primeiro investimento e acompanhe em
        tempo real em nosso site.
      </TextBox>

      <TextBox>
        <ChartPieSlice size={24} weight="fill" /> Seus gastos com despesas de
        lazer já ultrapassou 80% do orçamento, fique atento com seu limite.
      </TextBox>

      <TextBox>
        <ChartLineUp size={24} /> Seu investimento à longo prazo no grupo BVMF:
        SNEC34 teve lucro de 32,81%, fique atento ao mercado.
      </TextBox>

      <TextBox>
        <ChartPieSlice size={24} weight="fill" /> Você excedeu o limite de
        orçamento definido para a categoria lazer.
      </TextBox>

      <TextBox>
        <ChartPieSlice size={24} weight="fill" /> Parabéns, este mês você
        controlou seus gastos e não excedeu nenhum limite predefinido!!!
      </TextBox>
    </main>
  );
};

export default Notification;
