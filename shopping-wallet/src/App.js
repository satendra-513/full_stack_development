// src/App.js
import React, { useState } from 'react';
import Budget from './Budget';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css'; // Correct way to import a CSS file
import './index.css';
function App() {
  const [budget, setBudget] = useState(500); // Initial budget
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const calculateRemaining = () => {
    const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return budget - totalSpent;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Budget budget={budget} remaining={calculateRemaining()} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
