// src/Budget.js
import React from 'react';

function Budget({ budget, remaining }) {
  return (
    <div>
      <h2>Shopping Wallet</h2>
      <div>
        <h3>Initial Budget: ${budget}</h3>
        <h3>Remaining Balance: ${remaining}</h3>
      </div>
    </div>
  );
}

export default Budget;
