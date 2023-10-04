import Dexie, { Table } from 'dexie';

export interface User {
  email: string;
  name: string;
  password: string;
}
export interface Budget {
  pk?: number;
  email: string;
  categoria: string;
  value: string;
  date: string;
  description: string;
}
export interface IncomeExpense {
  pk?: number;
  email: string;
  value: string;
  date: string;
  description: string;
  categoria: string;
  type: string;
}
export interface Investment {
  pk?: number;
  email: string;
  value: string;
  date: string;
  description: string;
  categoria: string;
}

export class MySubClassedDexie extends Dexie {
  user!: Table<User>;
  budget!: Table<Budget>;
  incomeExpense!: Table<IncomeExpense>;
  investment!: Table<Investment>;

  constructor() {
    super('oganizaDatabase');
    this.version(1).stores({
      user: 'email, name, password',
      budget: '++pk, email, categoria, value, date, description',
      incomeExpense: '++pk, email, categoria, value, date, description, type',
      investment: '++pk, email, categoria, value, date, description'
    });
  }
}

export const db = new MySubClassedDexie();
