export let db;

export const DBOpenRequest = window.indexedDB.open('organiza_db', 1);

DBOpenRequest.onerror = () => {
  console.log('Error loading database.');
};

DBOpenRequest.onsuccess = (event: any) => {
  console.log('Database initialized.');
  console.log('onsuccess', event);

  db = event.target?.result;
};

DBOpenRequest.onupgradeneeded = (event: any) => {
  console.log('onupgradeneeded', event.target);
  db = event.target?.result;

  db.onerror = () => {
    console.error('Erro ao carregar o banco de dados.');
  };

  const user_tb = db.createObjectStore('user_tb', {
    keyPath: 'email',
    autoIncrement: false
  });
  const budget_tb = db.createObjectStore('budget_tb', {
    keyPath: 'pk',
    autoIncrement: true
  });
  const income_expense_tb = db.createObjectStore('income_expense_tb', {
    keyPath: 'pk',
    autoIncrement: true
  });
  const investment_tb = db.createObjectStore('investment_tb', {
    keyPath: 'pk',
    autoIncrement: true
  });

  user_tb.createIndex('name', 'name', { unique: false });
  user_tb.createIndex('password', 'password', { unique: false });

  budget_tb.createIndex('email', 'email', { unique: false }); //FK
  budget_tb.createIndex('categoria', 'categoria', { unique: false });
  budget_tb.createIndex('value', 'value', { unique: false });
  budget_tb.createIndex('date', 'date', { unique: false });
  budget_tb.createIndex('description', 'description', { unique: false });

  income_expense_tb.createIndex('email', 'email', { unique: false }); //FK
  income_expense_tb.createIndex('date', 'date', { unique: false });
  income_expense_tb.createIndex('value', 'value', { unique: false });
  income_expense_tb.createIndex('categoria', 'categoria', { unique: false });
  income_expense_tb.createIndex('description', 'description', {
    unique: false
  });

  investment_tb.createIndex('email', 'email', { unique: false }); //FK
  investment_tb.createIndex('date', 'date', { unique: false });
  investment_tb.createIndex('value', 'value', { unique: false });
  investment_tb.createIndex('categoria', 'categoria', { unique: false });
  investment_tb.createIndex('description', 'description', { unique: false });
};

export function addData(data: object, table: string) {
  const transaction = db.transaction([table], 'readwrite');
  const objectStore = transaction.objectStore(table);
  objectStore.add(data);
  transaction.addEventListener('error', () => console.log('Transaction error'));
}

// export function gettingDataIndex(table: string, index: string, key: string) {
//   const transaction = db.transaction([table]);
//   const objectStore = transaction.objectStore(table);
//   const row = objectStore.index(index);
//   const request = row.get(key);
//   request.onerror = (event: any) => {
//     console.log('gettingData, request error');
//   };
//   request.onsuccess = (event: any) => {
//     console.log(`Name for ${index}: ${key} is ${request.result.value}`);
//     return request.result.value;
//   };
// }
