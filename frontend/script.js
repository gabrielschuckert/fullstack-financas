const API_URL = 'http://localhost:4000/transactions';

async function loadTransactions() {
  const response = await fetch(API_URL);
  const data = await response.json();

  const list = document.getElementById('transactions');
  list.innerHTML = '';

  data.forEach(transaction => {
    const item = document.createElement('li');
    item.textContent = `${transaction.title} - R$ ${transaction.amount}`;
    list.appendChild(item);
  });
}

async function addTransaction() {
  const title = document.getElementById('title').value;
  const amount = Number(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, amount, type })
  });

  loadTransactions();
}

loadTransactions();
