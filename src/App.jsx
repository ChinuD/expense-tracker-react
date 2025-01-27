import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import {IncomeExpenses} from './Components/IncomeExpenses'
import  TransactionsList from './Components/TransactionsList ';
import { AddTransaction } from './Components/AddTransaction';

import { GlobalProvider } from './Components/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;