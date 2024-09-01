// src/ExpenseList.js
import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Expenses:</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.item}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
