const cors = require('cors');

const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// dados simulados (mock)
let transactions = [
  { id: 1, title: 'Salário', amount: 3000, type: 'income' },
  { id: 2, title: 'Aluguel', amount: 1200, type: 'expense' }
];

// rota principal
app.get('/', (req, res) => {
  res.send('API de Finanças funcionando 🚀');
});

// listar transações
app.get('/transactions', (req, res) => {
  res.json(transactions);
});

// criar transação
app.post('/transactions', (req, res) => {
  const { title, amount, type } = req.body;

  const newTransaction = {
    id: transactions.length + 1,
    title,
    amount,
    type
  };

  transactions.push(newTransaction);

  res.status(201).json(newTransaction);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
